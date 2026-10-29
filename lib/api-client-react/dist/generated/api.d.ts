import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { HealthStatus, JamendoDownload, JamendoTrack, SearchJamendoTracksParams } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getHealthCheckUrl: () => string;
/**
 * Returns server health status
 * @summary Health check
 */
export declare const healthCheck: (options?: Parameters<typeof customFetch>[1]) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getSearchJamendoTracksUrl: (params: SearchJamendoTracksParams) => string;
/**
 * @summary Search Jamendo tracks by lyric language and query
 */
export declare const searchJamendoTracks: (params: SearchJamendoTracksParams, options?: Parameters<typeof customFetch>[1]) => Promise<JamendoTrack[]>;
export declare const getSearchJamendoTracksQueryKey: (params?: SearchJamendoTracksParams) => readonly ["/api/music/tracks", ...SearchJamendoTracksParams[]];
export declare const getSearchJamendoTracksQueryOptions: <TData = Awaited<ReturnType<typeof searchJamendoTracks>>, TError = ErrorType<void>>(params: SearchJamendoTracksParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof searchJamendoTracks>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof searchJamendoTracks>>, TError, TData> & {
    queryKey: QueryKey;
};
export type SearchJamendoTracksQueryResult = NonNullable<Awaited<ReturnType<typeof searchJamendoTracks>>>;
export type SearchJamendoTracksQueryError = ErrorType<void>;
/**
 * @summary Search Jamendo tracks by lyric language and query
 */
export declare function useSearchJamendoTracks<TData = Awaited<ReturnType<typeof searchJamendoTracks>>, TError = ErrorType<void>>(params: SearchJamendoTracksParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof searchJamendoTracks>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetJamendoTrackUrl: (id: string) => string;
/**
 * @summary Get a current stream URL for a saved track
 */
export declare const getJamendoTrack: (id: string, options?: Parameters<typeof customFetch>[1]) => Promise<JamendoTrack>;
export declare const getGetJamendoTrackQueryKey: (id: string) => readonly [`/api/music/tracks/${string}`];
export declare const getGetJamendoTrackQueryOptions: <TData = Awaited<ReturnType<typeof getJamendoTrack>>, TError = ErrorType<void>>(id: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getJamendoTrack>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getJamendoTrack>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetJamendoTrackQueryResult = NonNullable<Awaited<ReturnType<typeof getJamendoTrack>>>;
export type GetJamendoTrackQueryError = ErrorType<void>;
/**
 * @summary Get a current stream URL for a saved track
 */
export declare function useGetJamendoTrack<TData = Awaited<ReturnType<typeof getJamendoTrack>>, TError = ErrorType<void>>(id: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getJamendoTrack>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getPrepareJamendoDownloadUrl: (id: string) => string;
/**
 * @summary Download a track only when Jamendo allows it
 */
export declare const prepareJamendoDownload: (id: string, options?: Parameters<typeof customFetch>[1]) => Promise<JamendoDownload>;
export declare const getPrepareJamendoDownloadMutationKey: () => readonly ["prepareJamendoDownload"];
export declare const getPrepareJamendoDownloadMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof prepareJamendoDownload>>, TError, PrepareJamendoDownloadMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof prepareJamendoDownload>>, TError, PrepareJamendoDownloadMutationVariables, TContext>;
export type PrepareJamendoDownloadMutationResult = NonNullable<Awaited<ReturnType<typeof prepareJamendoDownload>>>;
export type PrepareJamendoDownloadMutationError = ErrorType<void>;
export type PrepareJamendoDownloadMutationVariables = {
    id: string;
};
/**
* @summary Download a track only when Jamendo allows it
*/
export declare const usePrepareJamendoDownload: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof prepareJamendoDownload>>, TError, PrepareJamendoDownloadMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof prepareJamendoDownload>>, TError, PrepareJamendoDownloadMutationVariables, TContext>;
export {};
//# sourceMappingURL=api.d.ts.map