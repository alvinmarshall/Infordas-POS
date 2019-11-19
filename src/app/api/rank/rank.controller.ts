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
import { RankService } from "./rank.service";
import { injectable, inject } from "inversify";
import { IRank } from "../../../core/domain/entity/rank/IRank";
import { Request, Response } from "express";

/**
 * RankController class
 */
@injectable()
export class RankController {
  private rankService: RankService;

  /**
   * @constructor
   * @param $rankService require RankService instance
   */
  constructor(@inject(RankService) $rankService: RankService) {
    this.rankService = $rankService;
  }

  async addRank(req: Request, res: Response) {
    try {
      let rank = "Sales officer";
      const message = await this.rankService.addRank(rank);
      return res.status(201).send({ message, status: 201 });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "An error occurred", status: 500 });
    }
  }

  async removeRank(req: Request, res: Response) {
    try {
      let rankId = req.params.id;
      this.rankService.removeRank(rankId);
      const results = await this.rankService.removeRank(rankId);
      return res.send({ results, status: 200 });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "An error occurred", status: 500 });
    }
  }

  async updateRank(req: Request, res: Response) {
    try {
      const { id, position } = req.query;
      console.log("req", req.query);
      let rank: IRank = { id, position };
      this.rankService.updateRank(rank);
      const results = await this.rankService.updateRank(rank);
      return res.send({ results, status: 200 });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "An error occurred", status: 500 });
    }
  }
}
