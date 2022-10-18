// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import type { ActorId } from './Actor';
import type { FilmId } from './Film';

/** Represents the table public.film_actor */
export default interface FilmActor {
  /** Database type: pg_catalog.int2 */
  actor_id: ActorId;

  /** Database type: pg_catalog.int2 */
  film_id: FilmId;

  /** Database type: pg_catalog.timestamp */
  last_update: Date;
}

/** Represents the initializer for the table public.film_actor */
export interface FilmActorInitializer {
  /** Database type: pg_catalog.int2 */
  actor_id: ActorId;

  /** Database type: pg_catalog.int2 */
  film_id: FilmId;

  /**
   * Database type: pg_catalog.timestamp
   * Default value: now()
   */
  last_update?: Date;
}

/** Represents the mutator for the table public.film_actor */
export interface FilmActorMutator {
  /** Database type: pg_catalog.int2 */
  actor_id?: ActorId;

  /** Database type: pg_catalog.int2 */
  film_id?: FilmId;

  /** Database type: pg_catalog.timestamp */
  last_update?: Date;
}
