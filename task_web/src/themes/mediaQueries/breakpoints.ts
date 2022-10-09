import { MediaQueries, Breakpoints } from "./types";

const breakpointMap: { [key: string]: number } = {
  xxs: 360,
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1400,
};

const breakpoints: Breakpoints = Object.values(breakpointMap).map(
  (breakpoint) => `${breakpoint}px`
);

const mediaQueries: MediaQueries = {
  xxs: `@media screen and (min-width: ${breakpointMap.xxs}px)`,
  xs: `@media screen and (min-width: ${breakpointMap.xs}px)`,
  sm: `@media screen and (min-width: ${breakpointMap.sm}px)`,
  md: `@media screen and (min-width: ${breakpointMap.md}px)`,
  lg: `@media screen and (min-width: ${breakpointMap.lg}px)`,
  xl: `@media screen and (min-width: ${breakpointMap.xl}px)`,
  nav: `@media screen and (min-width: ${breakpointMap.lg}px)`,
};

const mediaQueriesMax: MediaQueries = {
  xxs: `@media screen and (max-width: ${breakpointMap.xxs}px)`,
  xs: `@media screen and (max-width: ${breakpointMap.xs}px)`,
  sm: `@media screen and (max-width: ${breakpointMap.sm - 1}px)`,
  md: `@media screen and (max-width: ${breakpointMap.md}px)`,
  lg: `@media screen and (max-width: ${breakpointMap.lg}px)`,
  xl: `@media screen and (max-width: ${breakpointMap.xl}px)`,
  nav: `@media screen and (max-width: ${breakpointMap.lg}px)`,
};

export type Media = {
  breakpoints: Breakpoints;
  mediaQueries: MediaQueries;
  mediaQueriesMax: MediaQueries;
  breakpointMap: { [key: string]: number };
};

const MediaBreakpoints = {
  breakpoints,
  mediaQueries,
  mediaQueriesMax,
  breakpointMap,
};

export default MediaBreakpoints;
