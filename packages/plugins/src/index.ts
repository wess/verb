// Official Verb Plugin Registry
// All official plugins for the Verb library

// React Plugin
export {
  createReactRendererPlugin,
  clearRenderCache,
  type ReactRendererConfig,
  type RenderOptions,
} from "./react/renderer.ts";

// Auth Plugin - TODO: Re-enable once auth package is fixed
// export {
//   createAuthPlugin,
//   createDefaultAuthConfig,
//   withAuth,
//   AuthUtils,
//   AuthHandlers,
//   AuthMiddleware,
//   SQLiteStorageAdapter,
//   PostgreSQLStorageAdapter,
//   YAMLStorageAdapter,
//   createStorageAdapter,
//   OAUTH2_PROVIDERS,
//   normalizeOAuth2UserInfo,
//   createOAuth2Provider,
//   type User,
//   type Session,
//   type AuthConfig,
//   type AuthPlugin,
//   type StorageAdapter,
//   type OAuth2Provider,
//   type AuthRequest,
//   type LoginCredentials,
//   type RegisterCredentials,
//   type OAuth2Config,
//   type StorageConfig,
//   type SessionConfig,
// } from "@verb/auth";

// Re-export common plugin types from server
export type { Plugin, PluginContext, PluginMetadata } from "@verb/server";
