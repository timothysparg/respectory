/*
 * Copyright © 2019 Atomist, Inc.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
export * from "./lib/tree/ast/astUtils";
export {
    isTokenCredentials,
    ProjectOperationCredentials,
    TokenCredentials,
} from "./lib/operations/common/ProjectOperationCredentials";
export {
    isRemoteRepoRef,
    ProviderType as ScmProviderType,
    RemoteRepoRef,
    RepoId,
    RepoRef,
    SimpleRepoId,
} from "./lib/operations/common/RepoId";
export {
    File as ProjectFile,
} from "./lib/project/File";
export * from "./lib/project/fileGlobs";
export {
    GitCommandGitProject,
    isValidSHA1,
} from "./lib/project/git/GitCommandGitProject";
export {
    GitHubRepoRef,
    isGitHubRepoRef,
} from "./lib/operations/common/GitHubRepoRef";
export {
    GitProject,
    GitPushOptions,
} from "./lib/project/git/GitProject";
export {
    GitStatus,
} from "./lib/project/git/gitStatus";
export {
    isLocalProject,
    LocalProject,
} from "./lib/project/local/LocalProject";
export {
    NodeFsLocalProject,
} from "./lib/project/local/NodeFsLocalProject";
export {
    InMemoryFile as InMemoryProjectFile,
} from "./lib/project/mem/InMemoryFile";
export {
    InMemoryProject,
} from "./lib/project/mem/InMemoryProject";
export {
    Project,
    ProjectAsync,
} from "./lib/project/Project";
// export { projectUtils };
export {
    CloneOptions,
} from "./lib/spi/clone/DirectoryManager";


