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
      const body: IRank = req.body;
      const data = await this.rankService.addRank(body);
      return res.status(201).send({ data, status: 201 });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "An error occurred", status: 500 });
    }
  }

  async removeRank(req: Request, res: Response) {
    try {
      let identifier = req.params.identifier;
      const data = await this.rankService.removeRank(identifier);
      return res.send({ data, status: 200 });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "An error occurred", status: 500 });
    }
  }

  async updateRank(req: Request, res: Response) {
    try {
      const body: IRank = req.body;
      const data = await this.rankService.updateRank(body);
      return res.send({ data, status: 200 });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "An error occurred", status: 500 });
    }
  }

  async getRanks(req: Request, res: Response) {
    try {
      const data = await this.rankService.getRanks();
      return res.send({ data, status: 200 });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "An error occurred", status: 500 });
    }
  }

  async getRank(req: Request, res: Response) {
    try {
      const identifier = req.params.identifier;
      const data = await this.rankService.getRankWithIdentifier(identifier);
      return res.send({ data, status: 200 });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "An error occurred", status: 500 });
    }
  }
}
