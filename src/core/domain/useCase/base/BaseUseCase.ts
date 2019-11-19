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

import { injectable } from "inversify";

/**
 * Base UseCase class
 * return promise of type T
 */
@injectable()
export abstract class BaseUseCase<T, Input> {
  /**
   * generateUseCase retuen promise of type T
   * @param input type any
   * @returns Promise<T>
   */
  protected abstract generateUseCase(input?: Input): Promise<T>;
  /**
   * buildUseCase generateUseCase of task
   * @param input type any
   * @returns generateUseCase
   */
  public buildUseCase(input?: Input): Promise<T> {
    return this.generateUseCase(input);
  }
}
