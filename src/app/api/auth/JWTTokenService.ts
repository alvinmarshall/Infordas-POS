// Copyright 2019 Bik_krl
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { IJwtToken } from "./jwtToken";
import JsonWebToken from "jsonwebtoken";
import config from "config";
import { injectable } from "inversify";
import { IUser } from "../../../core/domain/entity/user/IUser";
import { ITokenPayload } from "../../model/ITokenPayload";
import { type } from "os";
import { User_Type } from "../../../common/constants";
@injectable()
export class JWTTokenService implements IJwtToken {
  generateToken($user: IUser): string {
    const payload: ITokenPayload = {
      uuid: $user.uuid,
      name: $user.name || "",
      contact: $user.contact || "",
      rankId: $user.rank || -1,
      username: $user.username,
      imageUrl: $user.imageUrl || "",
      type: User_Type.USER
    };
    
    if ($user.username.includes("admin_")) {
      payload.type = User_Type.ADMIN;
    }
    let encode;
    let hours = $user.hours || 1;

    if ($user.rank == 1) {
      encode = JsonWebToken.sign(payload, config.get("jwtConfig.secret"));
    } else {
      encode = JsonWebToken.sign(payload, config.get("jwtConfig.secret"), {
        expiresIn: 60 * 60 * hours
      });
    }
    return encode;
  }
}
