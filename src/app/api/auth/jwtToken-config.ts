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

import { UserEntity } from "../../../core/domain/entity/user/UserEntity";
import { IJwtToken } from "./jwtToken";
import JsonWebToken from "jsonwebtoken";
import { ITokenPayload } from "../../model/ITokenPayload";
import config from "config";
import { injectable } from "inversify";

@injectable()
export class JWTTokenService implements IJwtToken {
  generateToken($userEntity: UserEntity): any {
    const payload: ITokenPayload = {
      uuid: $userEntity.$uuid,
      name: $userEntity.$name,
      contact: $userEntity.$contactNo,
      rankId: $userEntity.$rank,
      username: $userEntity.$username
    };
    let encode;

    if ($userEntity.$rank == 1) {
      encode = JsonWebToken.sign(payload, config.get("jwtConfig.secret"));
    } else {
      encode = JsonWebToken.sign(payload, config.get("jwtConfig.secret"), {
        expiresIn: 120
      });
    }
    return `Bearer ${encode}`;
  }
}
