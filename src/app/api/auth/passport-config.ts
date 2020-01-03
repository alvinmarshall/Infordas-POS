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

import passport from "passport";
import { ExtractJwt, Strategy, StrategyOptions } from "passport-jwt";
import config from "config";
import { UserService } from "../user/user.service";
import { inject, injectable } from "inversify";
import isEmpty from "lodash/isEmpty";
import { ITokenPayload } from "../../model/ITokenPayload";
import { IUser } from "../../../core/domain/entity/user/IUser";
import { User_Type } from "../../../common/constants";
/**
 * PassportService class
 */
@injectable()
class PassportService {
  private userService: UserService;

  constructor(@inject(UserService) $userService: UserService) {
    this.userService = $userService;
  }

  init() {
    const opt: StrategyOptions = {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get("jwtConfig.secret")
    };
    const strategy = new Strategy(
      opt,
      async (payload: ITokenPayload, done: any) => {
        try {
          let result;
          if (payload.type === User_Type.ADMIN) {
            result = await this.userService.getAdminWithIdentifier(
              payload.uuid
            );
          } else {
            result = await this.userService.getUserWithIdentifier(payload.uuid);
          }

          if (isEmpty(result)) {
            return done(null, false);
          }

          const tokenPayload: IUser = result;
          if (process.env.NODE_ENV === "development") {
            console.log(payload);
          }
          return done(null, tokenPayload);
        } catch (error) {
          return console.error(error);
        }
      }
    );

    passport.use(strategy);
  }
}
export default PassportService;
