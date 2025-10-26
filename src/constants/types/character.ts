import { DRIVES_TYPES, ACTION_TYPES } from "../character";

/**
 * Represents the types of drives available to a character.
 */
export type DriveType = (typeof DRIVES_TYPES)[number]

/**
 * Represents the types of actions available to a character.
 */
export type ActionType = (typeof ACTION_TYPES)[number]

/**
 * Represents a character's drive, which is a resource with current and maximum values.
 * Optionally includes a base value.
 */
export interface Drive {
  /** The current value of the drive. */
  current: number
  /** The maximum value the drive can reach. */
  max: number
  /** The base value of the drive, if applicable. */
  base?: number
}

/**
 * Represents a character's action, including its base value, current value, and optional gilded status.
 */
export interface Action {
  /**
   * The base value of the action.
   */
  base: number;
  /**
   * The current value of the action, which may differ from the base due to changes.
   */
  current: number;
  /**
   * Indicates whether the action is gilded (optional).
   */
  isGilded?: boolean;
}

/**
 * Represents a character's ability with localized names and descriptions.
 */
export interface Ability {
  /**
   * The name of the ability in English.
   */
  name: string,

  /**
   * The name of the ability in Russian.
   */
  nameRu: string,

  /**
   * The description of the ability in English.
   */
  description: string,

  /**
   * The description of the ability in Russian.
   */
  descriptionRu: string
}

/**
 * Represents the data structure for a character in the Candela Obscura character sheet.
 */
export interface CharacterData {
  /**
   * The character's name in English.
   */
  name: string,

  /**
   * The character's name in Russian.
   */
  nameRu: string,

  /**
   * The character's class in English.
   */
  class: string,

  /**
   * The character's class in Russian.
   */
  classRu: string,

  /**
   * Optional URL or path to the character's picture.
   */
  picture?: string,

  /**
   * A record of the character's drives, keyed by drive type.
   */
  drives: Record<DriveType, Drive>,

  /**
   * A record of the character's resistances, keyed by drive type.
   */
  resistances: Record<DriveType, number>

  /**
   * A record of the character's actions, keyed by action type.
   */
  actions: Record<ActionType, Action>,

  /**
   * Optional array of the character's abilities.
   */
  abilities?: Ability[]
}