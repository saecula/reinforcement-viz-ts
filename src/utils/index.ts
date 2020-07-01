import { EpisodeResult as EType } from './environments';

export type EpisodeResult = EType;
export { getLocal, setLocal } from './localStorage';
export { default as episodeBatchFactory } from './episodeFactory';
