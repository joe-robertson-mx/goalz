import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerAction = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Action, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Description: string;
  readonly Notes?: string | null;
  readonly Active?: boolean | null;
  readonly goalID: string;
  readonly Reminder?: boolean | null;
  readonly StartDate?: string | null;
  readonly FrequencyDays?: number | null;
  readonly TimesPerDays?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAction = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Action, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Description: string;
  readonly Notes?: string | null;
  readonly Active?: boolean | null;
  readonly goalID: string;
  readonly Reminder?: boolean | null;
  readonly StartDate?: string | null;
  readonly FrequencyDays?: number | null;
  readonly TimesPerDays?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Action = LazyLoading extends LazyLoadingDisabled ? EagerAction : LazyAction

export declare const Action: (new (init: ModelInit<Action>) => Action) & {
  copyOf(source: Action, mutator: (draft: MutableModel<Action>) => MutableModel<Action> | void): Action;
}

type EagerGoal = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Goal, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Description: string;
  readonly Active: boolean;
  readonly Actions?: (Action | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGoal = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Goal, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Description: string;
  readonly Active: boolean;
  readonly Actions: AsyncCollection<Action>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Goal = LazyLoading extends LazyLoadingDisabled ? EagerGoal : LazyGoal

export declare const Goal: (new (init: ModelInit<Goal>) => Goal) & {
  copyOf(source: Goal, mutator: (draft: MutableModel<Goal>) => MutableModel<Goal> | void): Goal;
}