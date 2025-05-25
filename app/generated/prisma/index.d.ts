
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model SurveyorProfile
 * 
 */
export type SurveyorProfile = $Result.DefaultSelection<Prisma.$SurveyorProfilePayload>
/**
 * Model Job
 * 
 */
export type Job = $Result.DefaultSelection<Prisma.$JobPayload>
/**
 * Model AdjoiningProperty
 * 
 */
export type AdjoiningProperty = $Result.DefaultSelection<Prisma.$AdjoiningPropertyPayload>
/**
 * Model Owner
 * 
 */
export type Owner = $Result.DefaultSelection<Prisma.$OwnerPayload>
/**
 * Model DocumentTemplate
 * 
 */
export type DocumentTemplate = $Result.DefaultSelection<Prisma.$DocumentTemplatePayload>
/**
 * Model GeneratedDocument
 * 
 */
export type GeneratedDocument = $Result.DefaultSelection<Prisma.$GeneratedDocumentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const JobStatus: {
  DRAFT: 'DRAFT',
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus]


export const OwnershipType: {
  FREEHOLDER: 'FREEHOLDER',
  LEASEHOLDER: 'LEASEHOLDER',
  TENANT: 'TENANT',
  OTHER: 'OTHER'
};

export type OwnershipType = (typeof OwnershipType)[keyof typeof OwnershipType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type JobStatus = $Enums.JobStatus

export const JobStatus: typeof $Enums.JobStatus

export type OwnershipType = $Enums.OwnershipType

export const OwnershipType: typeof $Enums.OwnershipType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.surveyorProfile`: Exposes CRUD operations for the **SurveyorProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SurveyorProfiles
    * const surveyorProfiles = await prisma.surveyorProfile.findMany()
    * ```
    */
  get surveyorProfile(): Prisma.SurveyorProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.job`: Exposes CRUD operations for the **Job** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.job.findMany()
    * ```
    */
  get job(): Prisma.JobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adjoiningProperty`: Exposes CRUD operations for the **AdjoiningProperty** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdjoiningProperties
    * const adjoiningProperties = await prisma.adjoiningProperty.findMany()
    * ```
    */
  get adjoiningProperty(): Prisma.AdjoiningPropertyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.owner`: Exposes CRUD operations for the **Owner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Owners
    * const owners = await prisma.owner.findMany()
    * ```
    */
  get owner(): Prisma.OwnerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documentTemplate`: Exposes CRUD operations for the **DocumentTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocumentTemplates
    * const documentTemplates = await prisma.documentTemplate.findMany()
    * ```
    */
  get documentTemplate(): Prisma.DocumentTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.generatedDocument`: Exposes CRUD operations for the **GeneratedDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GeneratedDocuments
    * const generatedDocuments = await prisma.generatedDocument.findMany()
    * ```
    */
  get generatedDocument(): Prisma.GeneratedDocumentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    SurveyorProfile: 'SurveyorProfile',
    Job: 'Job',
    AdjoiningProperty: 'AdjoiningProperty',
    Owner: 'Owner',
    DocumentTemplate: 'DocumentTemplate',
    GeneratedDocument: 'GeneratedDocument'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "surveyorProfile" | "job" | "adjoiningProperty" | "owner" | "documentTemplate" | "generatedDocument"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      SurveyorProfile: {
        payload: Prisma.$SurveyorProfilePayload<ExtArgs>
        fields: Prisma.SurveyorProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SurveyorProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyorProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SurveyorProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyorProfilePayload>
          }
          findFirst: {
            args: Prisma.SurveyorProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyorProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SurveyorProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyorProfilePayload>
          }
          findMany: {
            args: Prisma.SurveyorProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyorProfilePayload>[]
          }
          create: {
            args: Prisma.SurveyorProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyorProfilePayload>
          }
          createMany: {
            args: Prisma.SurveyorProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SurveyorProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyorProfilePayload>[]
          }
          delete: {
            args: Prisma.SurveyorProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyorProfilePayload>
          }
          update: {
            args: Prisma.SurveyorProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyorProfilePayload>
          }
          deleteMany: {
            args: Prisma.SurveyorProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SurveyorProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SurveyorProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyorProfilePayload>[]
          }
          upsert: {
            args: Prisma.SurveyorProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyorProfilePayload>
          }
          aggregate: {
            args: Prisma.SurveyorProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSurveyorProfile>
          }
          groupBy: {
            args: Prisma.SurveyorProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<SurveyorProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.SurveyorProfileCountArgs<ExtArgs>
            result: $Utils.Optional<SurveyorProfileCountAggregateOutputType> | number
          }
        }
      }
      Job: {
        payload: Prisma.$JobPayload<ExtArgs>
        fields: Prisma.JobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findFirst: {
            args: Prisma.JobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findMany: {
            args: Prisma.JobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          create: {
            args: Prisma.JobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          createMany: {
            args: Prisma.JobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          delete: {
            args: Prisma.JobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          update: {
            args: Prisma.JobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          deleteMany: {
            args: Prisma.JobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          upsert: {
            args: Prisma.JobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          aggregate: {
            args: Prisma.JobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJob>
          }
          groupBy: {
            args: Prisma.JobGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobCountArgs<ExtArgs>
            result: $Utils.Optional<JobCountAggregateOutputType> | number
          }
        }
      }
      AdjoiningProperty: {
        payload: Prisma.$AdjoiningPropertyPayload<ExtArgs>
        fields: Prisma.AdjoiningPropertyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdjoiningPropertyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdjoiningPropertyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdjoiningPropertyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdjoiningPropertyPayload>
          }
          findFirst: {
            args: Prisma.AdjoiningPropertyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdjoiningPropertyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdjoiningPropertyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdjoiningPropertyPayload>
          }
          findMany: {
            args: Prisma.AdjoiningPropertyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdjoiningPropertyPayload>[]
          }
          create: {
            args: Prisma.AdjoiningPropertyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdjoiningPropertyPayload>
          }
          createMany: {
            args: Prisma.AdjoiningPropertyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdjoiningPropertyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdjoiningPropertyPayload>[]
          }
          delete: {
            args: Prisma.AdjoiningPropertyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdjoiningPropertyPayload>
          }
          update: {
            args: Prisma.AdjoiningPropertyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdjoiningPropertyPayload>
          }
          deleteMany: {
            args: Prisma.AdjoiningPropertyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdjoiningPropertyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdjoiningPropertyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdjoiningPropertyPayload>[]
          }
          upsert: {
            args: Prisma.AdjoiningPropertyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdjoiningPropertyPayload>
          }
          aggregate: {
            args: Prisma.AdjoiningPropertyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdjoiningProperty>
          }
          groupBy: {
            args: Prisma.AdjoiningPropertyGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdjoiningPropertyGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdjoiningPropertyCountArgs<ExtArgs>
            result: $Utils.Optional<AdjoiningPropertyCountAggregateOutputType> | number
          }
        }
      }
      Owner: {
        payload: Prisma.$OwnerPayload<ExtArgs>
        fields: Prisma.OwnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OwnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OwnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          findFirst: {
            args: Prisma.OwnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OwnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          findMany: {
            args: Prisma.OwnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>[]
          }
          create: {
            args: Prisma.OwnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          createMany: {
            args: Prisma.OwnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OwnerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>[]
          }
          delete: {
            args: Prisma.OwnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          update: {
            args: Prisma.OwnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          deleteMany: {
            args: Prisma.OwnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OwnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OwnerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>[]
          }
          upsert: {
            args: Prisma.OwnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          aggregate: {
            args: Prisma.OwnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOwner>
          }
          groupBy: {
            args: Prisma.OwnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<OwnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.OwnerCountArgs<ExtArgs>
            result: $Utils.Optional<OwnerCountAggregateOutputType> | number
          }
        }
      }
      DocumentTemplate: {
        payload: Prisma.$DocumentTemplatePayload<ExtArgs>
        fields: Prisma.DocumentTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTemplatePayload>
          }
          findFirst: {
            args: Prisma.DocumentTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTemplatePayload>
          }
          findMany: {
            args: Prisma.DocumentTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTemplatePayload>[]
          }
          create: {
            args: Prisma.DocumentTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTemplatePayload>
          }
          createMany: {
            args: Prisma.DocumentTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTemplatePayload>[]
          }
          delete: {
            args: Prisma.DocumentTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTemplatePayload>
          }
          update: {
            args: Prisma.DocumentTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTemplatePayload>
          }
          deleteMany: {
            args: Prisma.DocumentTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentTemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTemplatePayload>[]
          }
          upsert: {
            args: Prisma.DocumentTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTemplatePayload>
          }
          aggregate: {
            args: Prisma.DocumentTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentTemplate>
          }
          groupBy: {
            args: Prisma.DocumentTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentTemplateCountAggregateOutputType> | number
          }
        }
      }
      GeneratedDocument: {
        payload: Prisma.$GeneratedDocumentPayload<ExtArgs>
        fields: Prisma.GeneratedDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GeneratedDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GeneratedDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedDocumentPayload>
          }
          findFirst: {
            args: Prisma.GeneratedDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GeneratedDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedDocumentPayload>
          }
          findMany: {
            args: Prisma.GeneratedDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedDocumentPayload>[]
          }
          create: {
            args: Prisma.GeneratedDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedDocumentPayload>
          }
          createMany: {
            args: Prisma.GeneratedDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GeneratedDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedDocumentPayload>[]
          }
          delete: {
            args: Prisma.GeneratedDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedDocumentPayload>
          }
          update: {
            args: Prisma.GeneratedDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedDocumentPayload>
          }
          deleteMany: {
            args: Prisma.GeneratedDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GeneratedDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GeneratedDocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedDocumentPayload>[]
          }
          upsert: {
            args: Prisma.GeneratedDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedDocumentPayload>
          }
          aggregate: {
            args: Prisma.GeneratedDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGeneratedDocument>
          }
          groupBy: {
            args: Prisma.GeneratedDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<GeneratedDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.GeneratedDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<GeneratedDocumentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    surveyorProfile?: SurveyorProfileOmit
    job?: JobOmit
    adjoiningProperty?: AdjoiningPropertyOmit
    owner?: OwnerOmit
    documentTemplate?: DocumentTemplateOmit
    generatedDocument?: GeneratedDocumentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    jobs: number
    templates: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobs?: boolean | UserCountOutputTypeCountJobsArgs
    templates?: boolean | UserCountOutputTypeCountTemplatesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentTemplateWhereInput
  }


  /**
   * Count Type JobCountOutputType
   */

  export type JobCountOutputType = {
    properties: number
    generatedDocs: number
  }

  export type JobCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | JobCountOutputTypeCountPropertiesArgs
    generatedDocs?: boolean | JobCountOutputTypeCountGeneratedDocsArgs
  }

  // Custom InputTypes
  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCountOutputType
     */
    select?: JobCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdjoiningPropertyWhereInput
  }

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountGeneratedDocsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneratedDocumentWhereInput
  }


  /**
   * Count Type AdjoiningPropertyCountOutputType
   */

  export type AdjoiningPropertyCountOutputType = {
    owners: number
  }

  export type AdjoiningPropertyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owners?: boolean | AdjoiningPropertyCountOutputTypeCountOwnersArgs
  }

  // Custom InputTypes
  /**
   * AdjoiningPropertyCountOutputType without action
   */
  export type AdjoiningPropertyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdjoiningPropertyCountOutputType
     */
    select?: AdjoiningPropertyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdjoiningPropertyCountOutputType without action
   */
  export type AdjoiningPropertyCountOutputTypeCountOwnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OwnerWhereInput
  }


  /**
   * Count Type DocumentTemplateCountOutputType
   */

  export type DocumentTemplateCountOutputType = {
    generatedDocs: number
  }

  export type DocumentTemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generatedDocs?: boolean | DocumentTemplateCountOutputTypeCountGeneratedDocsArgs
  }

  // Custom InputTypes
  /**
   * DocumentTemplateCountOutputType without action
   */
  export type DocumentTemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTemplateCountOutputType
     */
    select?: DocumentTemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DocumentTemplateCountOutputType without action
   */
  export type DocumentTemplateCountOutputTypeCountGeneratedDocsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneratedDocumentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    role: $Enums.Role
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    jobs?: boolean | User$jobsArgs<ExtArgs>
    templates?: boolean | User$templatesArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobs?: boolean | User$jobsArgs<ExtArgs>
    templates?: boolean | User$templatesArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      jobs: Prisma.$JobPayload<ExtArgs>[]
      templates: Prisma.$DocumentTemplatePayload<ExtArgs>[]
      profile: Prisma.$SurveyorProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      role: $Enums.Role
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobs<T extends User$jobsArgs<ExtArgs> = {}>(args?: Subset<T, User$jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    templates<T extends User$templatesArgs<ExtArgs> = {}>(args?: Subset<T, User$templatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__SurveyorProfileClient<$Result.GetResult<Prisma.$SurveyorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.jobs
   */
  export type User$jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    where?: JobWhereInput
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    cursor?: JobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * User.templates
   */
  export type User$templatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTemplate
     */
    select?: DocumentTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTemplate
     */
    omit?: DocumentTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTemplateInclude<ExtArgs> | null
    where?: DocumentTemplateWhereInput
    orderBy?: DocumentTemplateOrderByWithRelationInput | DocumentTemplateOrderByWithRelationInput[]
    cursor?: DocumentTemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentTemplateScalarFieldEnum | DocumentTemplateScalarFieldEnum[]
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyorProfile
     */
    select?: SurveyorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurveyorProfile
     */
    omit?: SurveyorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyorProfileInclude<ExtArgs> | null
    where?: SurveyorProfileWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model SurveyorProfile
   */

  export type AggregateSurveyorProfile = {
    _count: SurveyorProfileCountAggregateOutputType | null
    _min: SurveyorProfileMinAggregateOutputType | null
    _max: SurveyorProfileMaxAggregateOutputType | null
  }

  export type SurveyorProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    companyName: string | null
    addressLine1: string | null
    addressLine2: string | null
    city: string | null
    postcode: string | null
    phone: string | null
    website: string | null
  }

  export type SurveyorProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    companyName: string | null
    addressLine1: string | null
    addressLine2: string | null
    city: string | null
    postcode: string | null
    phone: string | null
    website: string | null
  }

  export type SurveyorProfileCountAggregateOutputType = {
    id: number
    userId: number
    companyName: number
    addressLine1: number
    addressLine2: number
    city: number
    postcode: number
    phone: number
    website: number
    _all: number
  }


  export type SurveyorProfileMinAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    addressLine1?: true
    addressLine2?: true
    city?: true
    postcode?: true
    phone?: true
    website?: true
  }

  export type SurveyorProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    addressLine1?: true
    addressLine2?: true
    city?: true
    postcode?: true
    phone?: true
    website?: true
  }

  export type SurveyorProfileCountAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    addressLine1?: true
    addressLine2?: true
    city?: true
    postcode?: true
    phone?: true
    website?: true
    _all?: true
  }

  export type SurveyorProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SurveyorProfile to aggregate.
     */
    where?: SurveyorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurveyorProfiles to fetch.
     */
    orderBy?: SurveyorProfileOrderByWithRelationInput | SurveyorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SurveyorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurveyorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurveyorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SurveyorProfiles
    **/
    _count?: true | SurveyorProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SurveyorProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SurveyorProfileMaxAggregateInputType
  }

  export type GetSurveyorProfileAggregateType<T extends SurveyorProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateSurveyorProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSurveyorProfile[P]>
      : GetScalarType<T[P], AggregateSurveyorProfile[P]>
  }




  export type SurveyorProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SurveyorProfileWhereInput
    orderBy?: SurveyorProfileOrderByWithAggregationInput | SurveyorProfileOrderByWithAggregationInput[]
    by: SurveyorProfileScalarFieldEnum[] | SurveyorProfileScalarFieldEnum
    having?: SurveyorProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SurveyorProfileCountAggregateInputType | true
    _min?: SurveyorProfileMinAggregateInputType
    _max?: SurveyorProfileMaxAggregateInputType
  }

  export type SurveyorProfileGroupByOutputType = {
    id: string
    userId: string
    companyName: string
    addressLine1: string
    addressLine2: string | null
    city: string
    postcode: string
    phone: string
    website: string | null
    _count: SurveyorProfileCountAggregateOutputType | null
    _min: SurveyorProfileMinAggregateOutputType | null
    _max: SurveyorProfileMaxAggregateOutputType | null
  }

  type GetSurveyorProfileGroupByPayload<T extends SurveyorProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SurveyorProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SurveyorProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SurveyorProfileGroupByOutputType[P]>
            : GetScalarType<T[P], SurveyorProfileGroupByOutputType[P]>
        }
      >
    >


  export type SurveyorProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    city?: boolean
    postcode?: boolean
    phone?: boolean
    website?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["surveyorProfile"]>

  export type SurveyorProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    city?: boolean
    postcode?: boolean
    phone?: boolean
    website?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["surveyorProfile"]>

  export type SurveyorProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    city?: boolean
    postcode?: boolean
    phone?: boolean
    website?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["surveyorProfile"]>

  export type SurveyorProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    companyName?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    city?: boolean
    postcode?: boolean
    phone?: boolean
    website?: boolean
  }

  export type SurveyorProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "companyName" | "addressLine1" | "addressLine2" | "city" | "postcode" | "phone" | "website", ExtArgs["result"]["surveyorProfile"]>
  export type SurveyorProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SurveyorProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SurveyorProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SurveyorProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SurveyorProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      companyName: string
      addressLine1: string
      addressLine2: string | null
      city: string
      postcode: string
      phone: string
      website: string | null
    }, ExtArgs["result"]["surveyorProfile"]>
    composites: {}
  }

  type SurveyorProfileGetPayload<S extends boolean | null | undefined | SurveyorProfileDefaultArgs> = $Result.GetResult<Prisma.$SurveyorProfilePayload, S>

  type SurveyorProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SurveyorProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SurveyorProfileCountAggregateInputType | true
    }

  export interface SurveyorProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SurveyorProfile'], meta: { name: 'SurveyorProfile' } }
    /**
     * Find zero or one SurveyorProfile that matches the filter.
     * @param {SurveyorProfileFindUniqueArgs} args - Arguments to find a SurveyorProfile
     * @example
     * // Get one SurveyorProfile
     * const surveyorProfile = await prisma.surveyorProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SurveyorProfileFindUniqueArgs>(args: SelectSubset<T, SurveyorProfileFindUniqueArgs<ExtArgs>>): Prisma__SurveyorProfileClient<$Result.GetResult<Prisma.$SurveyorProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SurveyorProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SurveyorProfileFindUniqueOrThrowArgs} args - Arguments to find a SurveyorProfile
     * @example
     * // Get one SurveyorProfile
     * const surveyorProfile = await prisma.surveyorProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SurveyorProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, SurveyorProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SurveyorProfileClient<$Result.GetResult<Prisma.$SurveyorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SurveyorProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyorProfileFindFirstArgs} args - Arguments to find a SurveyorProfile
     * @example
     * // Get one SurveyorProfile
     * const surveyorProfile = await prisma.surveyorProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SurveyorProfileFindFirstArgs>(args?: SelectSubset<T, SurveyorProfileFindFirstArgs<ExtArgs>>): Prisma__SurveyorProfileClient<$Result.GetResult<Prisma.$SurveyorProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SurveyorProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyorProfileFindFirstOrThrowArgs} args - Arguments to find a SurveyorProfile
     * @example
     * // Get one SurveyorProfile
     * const surveyorProfile = await prisma.surveyorProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SurveyorProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, SurveyorProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__SurveyorProfileClient<$Result.GetResult<Prisma.$SurveyorProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SurveyorProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyorProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SurveyorProfiles
     * const surveyorProfiles = await prisma.surveyorProfile.findMany()
     * 
     * // Get first 10 SurveyorProfiles
     * const surveyorProfiles = await prisma.surveyorProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const surveyorProfileWithIdOnly = await prisma.surveyorProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SurveyorProfileFindManyArgs>(args?: SelectSubset<T, SurveyorProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurveyorProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SurveyorProfile.
     * @param {SurveyorProfileCreateArgs} args - Arguments to create a SurveyorProfile.
     * @example
     * // Create one SurveyorProfile
     * const SurveyorProfile = await prisma.surveyorProfile.create({
     *   data: {
     *     // ... data to create a SurveyorProfile
     *   }
     * })
     * 
     */
    create<T extends SurveyorProfileCreateArgs>(args: SelectSubset<T, SurveyorProfileCreateArgs<ExtArgs>>): Prisma__SurveyorProfileClient<$Result.GetResult<Prisma.$SurveyorProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SurveyorProfiles.
     * @param {SurveyorProfileCreateManyArgs} args - Arguments to create many SurveyorProfiles.
     * @example
     * // Create many SurveyorProfiles
     * const surveyorProfile = await prisma.surveyorProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SurveyorProfileCreateManyArgs>(args?: SelectSubset<T, SurveyorProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SurveyorProfiles and returns the data saved in the database.
     * @param {SurveyorProfileCreateManyAndReturnArgs} args - Arguments to create many SurveyorProfiles.
     * @example
     * // Create many SurveyorProfiles
     * const surveyorProfile = await prisma.surveyorProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SurveyorProfiles and only return the `id`
     * const surveyorProfileWithIdOnly = await prisma.surveyorProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SurveyorProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, SurveyorProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurveyorProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SurveyorProfile.
     * @param {SurveyorProfileDeleteArgs} args - Arguments to delete one SurveyorProfile.
     * @example
     * // Delete one SurveyorProfile
     * const SurveyorProfile = await prisma.surveyorProfile.delete({
     *   where: {
     *     // ... filter to delete one SurveyorProfile
     *   }
     * })
     * 
     */
    delete<T extends SurveyorProfileDeleteArgs>(args: SelectSubset<T, SurveyorProfileDeleteArgs<ExtArgs>>): Prisma__SurveyorProfileClient<$Result.GetResult<Prisma.$SurveyorProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SurveyorProfile.
     * @param {SurveyorProfileUpdateArgs} args - Arguments to update one SurveyorProfile.
     * @example
     * // Update one SurveyorProfile
     * const surveyorProfile = await prisma.surveyorProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SurveyorProfileUpdateArgs>(args: SelectSubset<T, SurveyorProfileUpdateArgs<ExtArgs>>): Prisma__SurveyorProfileClient<$Result.GetResult<Prisma.$SurveyorProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SurveyorProfiles.
     * @param {SurveyorProfileDeleteManyArgs} args - Arguments to filter SurveyorProfiles to delete.
     * @example
     * // Delete a few SurveyorProfiles
     * const { count } = await prisma.surveyorProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SurveyorProfileDeleteManyArgs>(args?: SelectSubset<T, SurveyorProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SurveyorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyorProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SurveyorProfiles
     * const surveyorProfile = await prisma.surveyorProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SurveyorProfileUpdateManyArgs>(args: SelectSubset<T, SurveyorProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SurveyorProfiles and returns the data updated in the database.
     * @param {SurveyorProfileUpdateManyAndReturnArgs} args - Arguments to update many SurveyorProfiles.
     * @example
     * // Update many SurveyorProfiles
     * const surveyorProfile = await prisma.surveyorProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SurveyorProfiles and only return the `id`
     * const surveyorProfileWithIdOnly = await prisma.surveyorProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SurveyorProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, SurveyorProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurveyorProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SurveyorProfile.
     * @param {SurveyorProfileUpsertArgs} args - Arguments to update or create a SurveyorProfile.
     * @example
     * // Update or create a SurveyorProfile
     * const surveyorProfile = await prisma.surveyorProfile.upsert({
     *   create: {
     *     // ... data to create a SurveyorProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SurveyorProfile we want to update
     *   }
     * })
     */
    upsert<T extends SurveyorProfileUpsertArgs>(args: SelectSubset<T, SurveyorProfileUpsertArgs<ExtArgs>>): Prisma__SurveyorProfileClient<$Result.GetResult<Prisma.$SurveyorProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SurveyorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyorProfileCountArgs} args - Arguments to filter SurveyorProfiles to count.
     * @example
     * // Count the number of SurveyorProfiles
     * const count = await prisma.surveyorProfile.count({
     *   where: {
     *     // ... the filter for the SurveyorProfiles we want to count
     *   }
     * })
    **/
    count<T extends SurveyorProfileCountArgs>(
      args?: Subset<T, SurveyorProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SurveyorProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SurveyorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyorProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SurveyorProfileAggregateArgs>(args: Subset<T, SurveyorProfileAggregateArgs>): Prisma.PrismaPromise<GetSurveyorProfileAggregateType<T>>

    /**
     * Group by SurveyorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyorProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SurveyorProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SurveyorProfileGroupByArgs['orderBy'] }
        : { orderBy?: SurveyorProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SurveyorProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSurveyorProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SurveyorProfile model
   */
  readonly fields: SurveyorProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SurveyorProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SurveyorProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SurveyorProfile model
   */
  interface SurveyorProfileFieldRefs {
    readonly id: FieldRef<"SurveyorProfile", 'String'>
    readonly userId: FieldRef<"SurveyorProfile", 'String'>
    readonly companyName: FieldRef<"SurveyorProfile", 'String'>
    readonly addressLine1: FieldRef<"SurveyorProfile", 'String'>
    readonly addressLine2: FieldRef<"SurveyorProfile", 'String'>
    readonly city: FieldRef<"SurveyorProfile", 'String'>
    readonly postcode: FieldRef<"SurveyorProfile", 'String'>
    readonly phone: FieldRef<"SurveyorProfile", 'String'>
    readonly website: FieldRef<"SurveyorProfile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SurveyorProfile findUnique
   */
  export type SurveyorProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyorProfile
     */
    select?: SurveyorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurveyorProfile
     */
    omit?: SurveyorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyorProfileInclude<ExtArgs> | null
    /**
     * Filter, which SurveyorProfile to fetch.
     */
    where: SurveyorProfileWhereUniqueInput
  }

  /**
   * SurveyorProfile findUniqueOrThrow
   */
  export type SurveyorProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyorProfile
     */
    select?: SurveyorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurveyorProfile
     */
    omit?: SurveyorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyorProfileInclude<ExtArgs> | null
    /**
     * Filter, which SurveyorProfile to fetch.
     */
    where: SurveyorProfileWhereUniqueInput
  }

  /**
   * SurveyorProfile findFirst
   */
  export type SurveyorProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyorProfile
     */
    select?: SurveyorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurveyorProfile
     */
    omit?: SurveyorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyorProfileInclude<ExtArgs> | null
    /**
     * Filter, which SurveyorProfile to fetch.
     */
    where?: SurveyorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurveyorProfiles to fetch.
     */
    orderBy?: SurveyorProfileOrderByWithRelationInput | SurveyorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SurveyorProfiles.
     */
    cursor?: SurveyorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurveyorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurveyorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SurveyorProfiles.
     */
    distinct?: SurveyorProfileScalarFieldEnum | SurveyorProfileScalarFieldEnum[]
  }

  /**
   * SurveyorProfile findFirstOrThrow
   */
  export type SurveyorProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyorProfile
     */
    select?: SurveyorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurveyorProfile
     */
    omit?: SurveyorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyorProfileInclude<ExtArgs> | null
    /**
     * Filter, which SurveyorProfile to fetch.
     */
    where?: SurveyorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurveyorProfiles to fetch.
     */
    orderBy?: SurveyorProfileOrderByWithRelationInput | SurveyorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SurveyorProfiles.
     */
    cursor?: SurveyorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurveyorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurveyorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SurveyorProfiles.
     */
    distinct?: SurveyorProfileScalarFieldEnum | SurveyorProfileScalarFieldEnum[]
  }

  /**
   * SurveyorProfile findMany
   */
  export type SurveyorProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyorProfile
     */
    select?: SurveyorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurveyorProfile
     */
    omit?: SurveyorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyorProfileInclude<ExtArgs> | null
    /**
     * Filter, which SurveyorProfiles to fetch.
     */
    where?: SurveyorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurveyorProfiles to fetch.
     */
    orderBy?: SurveyorProfileOrderByWithRelationInput | SurveyorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SurveyorProfiles.
     */
    cursor?: SurveyorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurveyorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurveyorProfiles.
     */
    skip?: number
    distinct?: SurveyorProfileScalarFieldEnum | SurveyorProfileScalarFieldEnum[]
  }

  /**
   * SurveyorProfile create
   */
  export type SurveyorProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyorProfile
     */
    select?: SurveyorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurveyorProfile
     */
    omit?: SurveyorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyorProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a SurveyorProfile.
     */
    data: XOR<SurveyorProfileCreateInput, SurveyorProfileUncheckedCreateInput>
  }

  /**
   * SurveyorProfile createMany
   */
  export type SurveyorProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SurveyorProfiles.
     */
    data: SurveyorProfileCreateManyInput | SurveyorProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SurveyorProfile createManyAndReturn
   */
  export type SurveyorProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyorProfile
     */
    select?: SurveyorProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SurveyorProfile
     */
    omit?: SurveyorProfileOmit<ExtArgs> | null
    /**
     * The data used to create many SurveyorProfiles.
     */
    data: SurveyorProfileCreateManyInput | SurveyorProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyorProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SurveyorProfile update
   */
  export type SurveyorProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyorProfile
     */
    select?: SurveyorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurveyorProfile
     */
    omit?: SurveyorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyorProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a SurveyorProfile.
     */
    data: XOR<SurveyorProfileUpdateInput, SurveyorProfileUncheckedUpdateInput>
    /**
     * Choose, which SurveyorProfile to update.
     */
    where: SurveyorProfileWhereUniqueInput
  }

  /**
   * SurveyorProfile updateMany
   */
  export type SurveyorProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SurveyorProfiles.
     */
    data: XOR<SurveyorProfileUpdateManyMutationInput, SurveyorProfileUncheckedUpdateManyInput>
    /**
     * Filter which SurveyorProfiles to update
     */
    where?: SurveyorProfileWhereInput
    /**
     * Limit how many SurveyorProfiles to update.
     */
    limit?: number
  }

  /**
   * SurveyorProfile updateManyAndReturn
   */
  export type SurveyorProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyorProfile
     */
    select?: SurveyorProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SurveyorProfile
     */
    omit?: SurveyorProfileOmit<ExtArgs> | null
    /**
     * The data used to update SurveyorProfiles.
     */
    data: XOR<SurveyorProfileUpdateManyMutationInput, SurveyorProfileUncheckedUpdateManyInput>
    /**
     * Filter which SurveyorProfiles to update
     */
    where?: SurveyorProfileWhereInput
    /**
     * Limit how many SurveyorProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyorProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SurveyorProfile upsert
   */
  export type SurveyorProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyorProfile
     */
    select?: SurveyorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurveyorProfile
     */
    omit?: SurveyorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyorProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the SurveyorProfile to update in case it exists.
     */
    where: SurveyorProfileWhereUniqueInput
    /**
     * In case the SurveyorProfile found by the `where` argument doesn't exist, create a new SurveyorProfile with this data.
     */
    create: XOR<SurveyorProfileCreateInput, SurveyorProfileUncheckedCreateInput>
    /**
     * In case the SurveyorProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SurveyorProfileUpdateInput, SurveyorProfileUncheckedUpdateInput>
  }

  /**
   * SurveyorProfile delete
   */
  export type SurveyorProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyorProfile
     */
    select?: SurveyorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurveyorProfile
     */
    omit?: SurveyorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyorProfileInclude<ExtArgs> | null
    /**
     * Filter which SurveyorProfile to delete.
     */
    where: SurveyorProfileWhereUniqueInput
  }

  /**
   * SurveyorProfile deleteMany
   */
  export type SurveyorProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SurveyorProfiles to delete
     */
    where?: SurveyorProfileWhereInput
    /**
     * Limit how many SurveyorProfiles to delete.
     */
    limit?: number
  }

  /**
   * SurveyorProfile without action
   */
  export type SurveyorProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyorProfile
     */
    select?: SurveyorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurveyorProfile
     */
    omit?: SurveyorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyorProfileInclude<ExtArgs> | null
  }


  /**
   * Model Job
   */

  export type AggregateJob = {
    _count: JobCountAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  export type JobMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    reference: string | null
    description: string | null
    status: $Enums.JobStatus | null
    createdAt: Date | null
  }

  export type JobMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    reference: string | null
    description: string | null
    status: $Enums.JobStatus | null
    createdAt: Date | null
  }

  export type JobCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    reference: number
    description: number
    status: number
    createdAt: number
    _all: number
  }


  export type JobMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    reference?: true
    description?: true
    status?: true
    createdAt?: true
  }

  export type JobMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    reference?: true
    description?: true
    status?: true
    createdAt?: true
  }

  export type JobCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    reference?: true
    description?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type JobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Job to aggregate.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jobs
    **/
    _count?: true | JobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobMaxAggregateInputType
  }

  export type GetJobAggregateType<T extends JobAggregateArgs> = {
        [P in keyof T & keyof AggregateJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob[P]>
      : GetScalarType<T[P], AggregateJob[P]>
  }




  export type JobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
    orderBy?: JobOrderByWithAggregationInput | JobOrderByWithAggregationInput[]
    by: JobScalarFieldEnum[] | JobScalarFieldEnum
    having?: JobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobCountAggregateInputType | true
    _min?: JobMinAggregateInputType
    _max?: JobMaxAggregateInputType
  }

  export type JobGroupByOutputType = {
    id: string
    userId: string
    title: string
    reference: string | null
    description: string | null
    status: $Enums.JobStatus
    createdAt: Date
    _count: JobCountAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  type GetJobGroupByPayload<T extends JobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobGroupByOutputType[P]>
            : GetScalarType<T[P], JobGroupByOutputType[P]>
        }
      >
    >


  export type JobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    reference?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    properties?: boolean | Job$propertiesArgs<ExtArgs>
    generatedDocs?: boolean | Job$generatedDocsArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    reference?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    reference?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    reference?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type JobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "reference" | "description" | "status" | "createdAt", ExtArgs["result"]["job"]>
  export type JobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    properties?: boolean | Job$propertiesArgs<ExtArgs>
    generatedDocs?: boolean | Job$generatedDocsArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type JobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $JobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Job"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      properties: Prisma.$AdjoiningPropertyPayload<ExtArgs>[]
      generatedDocs: Prisma.$GeneratedDocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      reference: string | null
      description: string | null
      status: $Enums.JobStatus
      createdAt: Date
    }, ExtArgs["result"]["job"]>
    composites: {}
  }

  type JobGetPayload<S extends boolean | null | undefined | JobDefaultArgs> = $Result.GetResult<Prisma.$JobPayload, S>

  type JobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobCountAggregateInputType | true
    }

  export interface JobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Job'], meta: { name: 'Job' } }
    /**
     * Find zero or one Job that matches the filter.
     * @param {JobFindUniqueArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobFindUniqueArgs>(args: SelectSubset<T, JobFindUniqueArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Job that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobFindUniqueOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobFindUniqueOrThrowArgs>(args: SelectSubset<T, JobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobFindFirstArgs>(args?: SelectSubset<T, JobFindFirstArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobFindFirstOrThrowArgs>(args?: SelectSubset<T, JobFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.job.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.job.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobWithIdOnly = await prisma.job.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobFindManyArgs>(args?: SelectSubset<T, JobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Job.
     * @param {JobCreateArgs} args - Arguments to create a Job.
     * @example
     * // Create one Job
     * const Job = await prisma.job.create({
     *   data: {
     *     // ... data to create a Job
     *   }
     * })
     * 
     */
    create<T extends JobCreateArgs>(args: SelectSubset<T, JobCreateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jobs.
     * @param {JobCreateManyArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobCreateManyArgs>(args?: SelectSubset<T, JobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jobs and returns the data saved in the database.
     * @param {JobCreateManyAndReturnArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jobs and only return the `id`
     * const jobWithIdOnly = await prisma.job.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobCreateManyAndReturnArgs>(args?: SelectSubset<T, JobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Job.
     * @param {JobDeleteArgs} args - Arguments to delete one Job.
     * @example
     * // Delete one Job
     * const Job = await prisma.job.delete({
     *   where: {
     *     // ... filter to delete one Job
     *   }
     * })
     * 
     */
    delete<T extends JobDeleteArgs>(args: SelectSubset<T, JobDeleteArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Job.
     * @param {JobUpdateArgs} args - Arguments to update one Job.
     * @example
     * // Update one Job
     * const job = await prisma.job.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobUpdateArgs>(args: SelectSubset<T, JobUpdateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jobs.
     * @param {JobDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.job.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobDeleteManyArgs>(args?: SelectSubset<T, JobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobUpdateManyArgs>(args: SelectSubset<T, JobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs and returns the data updated in the database.
     * @param {JobUpdateManyAndReturnArgs} args - Arguments to update many Jobs.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Jobs and only return the `id`
     * const jobWithIdOnly = await prisma.job.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JobUpdateManyAndReturnArgs>(args: SelectSubset<T, JobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Job.
     * @param {JobUpsertArgs} args - Arguments to update or create a Job.
     * @example
     * // Update or create a Job
     * const job = await prisma.job.upsert({
     *   create: {
     *     // ... data to create a Job
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job we want to update
     *   }
     * })
     */
    upsert<T extends JobUpsertArgs>(args: SelectSubset<T, JobUpsertArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.job.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends JobCountArgs>(
      args?: Subset<T, JobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobAggregateArgs>(args: Subset<T, JobAggregateArgs>): Prisma.PrismaPromise<GetJobAggregateType<T>>

    /**
     * Group by Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobGroupByArgs['orderBy'] }
        : { orderBy?: JobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Job model
   */
  readonly fields: JobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Job.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    properties<T extends Job$propertiesArgs<ExtArgs> = {}>(args?: Subset<T, Job$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdjoiningPropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    generatedDocs<T extends Job$generatedDocsArgs<ExtArgs> = {}>(args?: Subset<T, Job$generatedDocsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Job model
   */
  interface JobFieldRefs {
    readonly id: FieldRef<"Job", 'String'>
    readonly userId: FieldRef<"Job", 'String'>
    readonly title: FieldRef<"Job", 'String'>
    readonly reference: FieldRef<"Job", 'String'>
    readonly description: FieldRef<"Job", 'String'>
    readonly status: FieldRef<"Job", 'JobStatus'>
    readonly createdAt: FieldRef<"Job", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Job findUnique
   */
  export type JobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findUniqueOrThrow
   */
  export type JobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findFirst
   */
  export type JobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findFirstOrThrow
   */
  export type JobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findMany
   */
  export type JobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Jobs to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job create
   */
  export type JobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to create a Job.
     */
    data: XOR<JobCreateInput, JobUncheckedCreateInput>
  }

  /**
   * Job createMany
   */
  export type JobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Job createManyAndReturn
   */
  export type JobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Job update
   */
  export type JobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to update a Job.
     */
    data: XOR<JobUpdateInput, JobUncheckedUpdateInput>
    /**
     * Choose, which Job to update.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job updateMany
   */
  export type JobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to update.
     */
    limit?: number
  }

  /**
   * Job updateManyAndReturn
   */
  export type JobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Job upsert
   */
  export type JobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The filter to search for the Job to update in case it exists.
     */
    where: JobWhereUniqueInput
    /**
     * In case the Job found by the `where` argument doesn't exist, create a new Job with this data.
     */
    create: XOR<JobCreateInput, JobUncheckedCreateInput>
    /**
     * In case the Job was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobUpdateInput, JobUncheckedUpdateInput>
  }

  /**
   * Job delete
   */
  export type JobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter which Job to delete.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job deleteMany
   */
  export type JobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jobs to delete
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to delete.
     */
    limit?: number
  }

  /**
   * Job.properties
   */
  export type Job$propertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdjoiningProperty
     */
    select?: AdjoiningPropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdjoiningProperty
     */
    omit?: AdjoiningPropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdjoiningPropertyInclude<ExtArgs> | null
    where?: AdjoiningPropertyWhereInput
    orderBy?: AdjoiningPropertyOrderByWithRelationInput | AdjoiningPropertyOrderByWithRelationInput[]
    cursor?: AdjoiningPropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdjoiningPropertyScalarFieldEnum | AdjoiningPropertyScalarFieldEnum[]
  }

  /**
   * Job.generatedDocs
   */
  export type Job$generatedDocsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedDocument
     */
    select?: GeneratedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedDocument
     */
    omit?: GeneratedDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedDocumentInclude<ExtArgs> | null
    where?: GeneratedDocumentWhereInput
    orderBy?: GeneratedDocumentOrderByWithRelationInput | GeneratedDocumentOrderByWithRelationInput[]
    cursor?: GeneratedDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GeneratedDocumentScalarFieldEnum | GeneratedDocumentScalarFieldEnum[]
  }

  /**
   * Job without action
   */
  export type JobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
  }


  /**
   * Model AdjoiningProperty
   */

  export type AggregateAdjoiningProperty = {
    _count: AdjoiningPropertyCountAggregateOutputType | null
    _min: AdjoiningPropertyMinAggregateOutputType | null
    _max: AdjoiningPropertyMaxAggregateOutputType | null
  }

  export type AdjoiningPropertyMinAggregateOutputType = {
    id: string | null
    jobId: string | null
    addressLine1: string | null
    addressLine2: string | null
    postcode: string | null
    createdAt: Date | null
  }

  export type AdjoiningPropertyMaxAggregateOutputType = {
    id: string | null
    jobId: string | null
    addressLine1: string | null
    addressLine2: string | null
    postcode: string | null
    createdAt: Date | null
  }

  export type AdjoiningPropertyCountAggregateOutputType = {
    id: number
    jobId: number
    addressLine1: number
    addressLine2: number
    postcode: number
    createdAt: number
    _all: number
  }


  export type AdjoiningPropertyMinAggregateInputType = {
    id?: true
    jobId?: true
    addressLine1?: true
    addressLine2?: true
    postcode?: true
    createdAt?: true
  }

  export type AdjoiningPropertyMaxAggregateInputType = {
    id?: true
    jobId?: true
    addressLine1?: true
    addressLine2?: true
    postcode?: true
    createdAt?: true
  }

  export type AdjoiningPropertyCountAggregateInputType = {
    id?: true
    jobId?: true
    addressLine1?: true
    addressLine2?: true
    postcode?: true
    createdAt?: true
    _all?: true
  }

  export type AdjoiningPropertyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdjoiningProperty to aggregate.
     */
    where?: AdjoiningPropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdjoiningProperties to fetch.
     */
    orderBy?: AdjoiningPropertyOrderByWithRelationInput | AdjoiningPropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdjoiningPropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdjoiningProperties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdjoiningProperties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdjoiningProperties
    **/
    _count?: true | AdjoiningPropertyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdjoiningPropertyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdjoiningPropertyMaxAggregateInputType
  }

  export type GetAdjoiningPropertyAggregateType<T extends AdjoiningPropertyAggregateArgs> = {
        [P in keyof T & keyof AggregateAdjoiningProperty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdjoiningProperty[P]>
      : GetScalarType<T[P], AggregateAdjoiningProperty[P]>
  }




  export type AdjoiningPropertyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdjoiningPropertyWhereInput
    orderBy?: AdjoiningPropertyOrderByWithAggregationInput | AdjoiningPropertyOrderByWithAggregationInput[]
    by: AdjoiningPropertyScalarFieldEnum[] | AdjoiningPropertyScalarFieldEnum
    having?: AdjoiningPropertyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdjoiningPropertyCountAggregateInputType | true
    _min?: AdjoiningPropertyMinAggregateInputType
    _max?: AdjoiningPropertyMaxAggregateInputType
  }

  export type AdjoiningPropertyGroupByOutputType = {
    id: string
    jobId: string
    addressLine1: string
    addressLine2: string | null
    postcode: string
    createdAt: Date
    _count: AdjoiningPropertyCountAggregateOutputType | null
    _min: AdjoiningPropertyMinAggregateOutputType | null
    _max: AdjoiningPropertyMaxAggregateOutputType | null
  }

  type GetAdjoiningPropertyGroupByPayload<T extends AdjoiningPropertyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdjoiningPropertyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdjoiningPropertyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdjoiningPropertyGroupByOutputType[P]>
            : GetScalarType<T[P], AdjoiningPropertyGroupByOutputType[P]>
        }
      >
    >


  export type AdjoiningPropertySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    postcode?: boolean
    createdAt?: boolean
    job?: boolean | JobDefaultArgs<ExtArgs>
    owners?: boolean | AdjoiningProperty$ownersArgs<ExtArgs>
    _count?: boolean | AdjoiningPropertyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adjoiningProperty"]>

  export type AdjoiningPropertySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    postcode?: boolean
    createdAt?: boolean
    job?: boolean | JobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adjoiningProperty"]>

  export type AdjoiningPropertySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    postcode?: boolean
    createdAt?: boolean
    job?: boolean | JobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adjoiningProperty"]>

  export type AdjoiningPropertySelectScalar = {
    id?: boolean
    jobId?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    postcode?: boolean
    createdAt?: boolean
  }

  export type AdjoiningPropertyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobId" | "addressLine1" | "addressLine2" | "postcode" | "createdAt", ExtArgs["result"]["adjoiningProperty"]>
  export type AdjoiningPropertyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobDefaultArgs<ExtArgs>
    owners?: boolean | AdjoiningProperty$ownersArgs<ExtArgs>
    _count?: boolean | AdjoiningPropertyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdjoiningPropertyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobDefaultArgs<ExtArgs>
  }
  export type AdjoiningPropertyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobDefaultArgs<ExtArgs>
  }

  export type $AdjoiningPropertyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdjoiningProperty"
    objects: {
      job: Prisma.$JobPayload<ExtArgs>
      owners: Prisma.$OwnerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jobId: string
      addressLine1: string
      addressLine2: string | null
      postcode: string
      createdAt: Date
    }, ExtArgs["result"]["adjoiningProperty"]>
    composites: {}
  }

  type AdjoiningPropertyGetPayload<S extends boolean | null | undefined | AdjoiningPropertyDefaultArgs> = $Result.GetResult<Prisma.$AdjoiningPropertyPayload, S>

  type AdjoiningPropertyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdjoiningPropertyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdjoiningPropertyCountAggregateInputType | true
    }

  export interface AdjoiningPropertyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdjoiningProperty'], meta: { name: 'AdjoiningProperty' } }
    /**
     * Find zero or one AdjoiningProperty that matches the filter.
     * @param {AdjoiningPropertyFindUniqueArgs} args - Arguments to find a AdjoiningProperty
     * @example
     * // Get one AdjoiningProperty
     * const adjoiningProperty = await prisma.adjoiningProperty.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdjoiningPropertyFindUniqueArgs>(args: SelectSubset<T, AdjoiningPropertyFindUniqueArgs<ExtArgs>>): Prisma__AdjoiningPropertyClient<$Result.GetResult<Prisma.$AdjoiningPropertyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdjoiningProperty that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdjoiningPropertyFindUniqueOrThrowArgs} args - Arguments to find a AdjoiningProperty
     * @example
     * // Get one AdjoiningProperty
     * const adjoiningProperty = await prisma.adjoiningProperty.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdjoiningPropertyFindUniqueOrThrowArgs>(args: SelectSubset<T, AdjoiningPropertyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdjoiningPropertyClient<$Result.GetResult<Prisma.$AdjoiningPropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdjoiningProperty that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdjoiningPropertyFindFirstArgs} args - Arguments to find a AdjoiningProperty
     * @example
     * // Get one AdjoiningProperty
     * const adjoiningProperty = await prisma.adjoiningProperty.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdjoiningPropertyFindFirstArgs>(args?: SelectSubset<T, AdjoiningPropertyFindFirstArgs<ExtArgs>>): Prisma__AdjoiningPropertyClient<$Result.GetResult<Prisma.$AdjoiningPropertyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdjoiningProperty that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdjoiningPropertyFindFirstOrThrowArgs} args - Arguments to find a AdjoiningProperty
     * @example
     * // Get one AdjoiningProperty
     * const adjoiningProperty = await prisma.adjoiningProperty.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdjoiningPropertyFindFirstOrThrowArgs>(args?: SelectSubset<T, AdjoiningPropertyFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdjoiningPropertyClient<$Result.GetResult<Prisma.$AdjoiningPropertyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdjoiningProperties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdjoiningPropertyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdjoiningProperties
     * const adjoiningProperties = await prisma.adjoiningProperty.findMany()
     * 
     * // Get first 10 AdjoiningProperties
     * const adjoiningProperties = await prisma.adjoiningProperty.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adjoiningPropertyWithIdOnly = await prisma.adjoiningProperty.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdjoiningPropertyFindManyArgs>(args?: SelectSubset<T, AdjoiningPropertyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdjoiningPropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdjoiningProperty.
     * @param {AdjoiningPropertyCreateArgs} args - Arguments to create a AdjoiningProperty.
     * @example
     * // Create one AdjoiningProperty
     * const AdjoiningProperty = await prisma.adjoiningProperty.create({
     *   data: {
     *     // ... data to create a AdjoiningProperty
     *   }
     * })
     * 
     */
    create<T extends AdjoiningPropertyCreateArgs>(args: SelectSubset<T, AdjoiningPropertyCreateArgs<ExtArgs>>): Prisma__AdjoiningPropertyClient<$Result.GetResult<Prisma.$AdjoiningPropertyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdjoiningProperties.
     * @param {AdjoiningPropertyCreateManyArgs} args - Arguments to create many AdjoiningProperties.
     * @example
     * // Create many AdjoiningProperties
     * const adjoiningProperty = await prisma.adjoiningProperty.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdjoiningPropertyCreateManyArgs>(args?: SelectSubset<T, AdjoiningPropertyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdjoiningProperties and returns the data saved in the database.
     * @param {AdjoiningPropertyCreateManyAndReturnArgs} args - Arguments to create many AdjoiningProperties.
     * @example
     * // Create many AdjoiningProperties
     * const adjoiningProperty = await prisma.adjoiningProperty.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdjoiningProperties and only return the `id`
     * const adjoiningPropertyWithIdOnly = await prisma.adjoiningProperty.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdjoiningPropertyCreateManyAndReturnArgs>(args?: SelectSubset<T, AdjoiningPropertyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdjoiningPropertyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdjoiningProperty.
     * @param {AdjoiningPropertyDeleteArgs} args - Arguments to delete one AdjoiningProperty.
     * @example
     * // Delete one AdjoiningProperty
     * const AdjoiningProperty = await prisma.adjoiningProperty.delete({
     *   where: {
     *     // ... filter to delete one AdjoiningProperty
     *   }
     * })
     * 
     */
    delete<T extends AdjoiningPropertyDeleteArgs>(args: SelectSubset<T, AdjoiningPropertyDeleteArgs<ExtArgs>>): Prisma__AdjoiningPropertyClient<$Result.GetResult<Prisma.$AdjoiningPropertyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdjoiningProperty.
     * @param {AdjoiningPropertyUpdateArgs} args - Arguments to update one AdjoiningProperty.
     * @example
     * // Update one AdjoiningProperty
     * const adjoiningProperty = await prisma.adjoiningProperty.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdjoiningPropertyUpdateArgs>(args: SelectSubset<T, AdjoiningPropertyUpdateArgs<ExtArgs>>): Prisma__AdjoiningPropertyClient<$Result.GetResult<Prisma.$AdjoiningPropertyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdjoiningProperties.
     * @param {AdjoiningPropertyDeleteManyArgs} args - Arguments to filter AdjoiningProperties to delete.
     * @example
     * // Delete a few AdjoiningProperties
     * const { count } = await prisma.adjoiningProperty.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdjoiningPropertyDeleteManyArgs>(args?: SelectSubset<T, AdjoiningPropertyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdjoiningProperties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdjoiningPropertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdjoiningProperties
     * const adjoiningProperty = await prisma.adjoiningProperty.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdjoiningPropertyUpdateManyArgs>(args: SelectSubset<T, AdjoiningPropertyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdjoiningProperties and returns the data updated in the database.
     * @param {AdjoiningPropertyUpdateManyAndReturnArgs} args - Arguments to update many AdjoiningProperties.
     * @example
     * // Update many AdjoiningProperties
     * const adjoiningProperty = await prisma.adjoiningProperty.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdjoiningProperties and only return the `id`
     * const adjoiningPropertyWithIdOnly = await prisma.adjoiningProperty.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdjoiningPropertyUpdateManyAndReturnArgs>(args: SelectSubset<T, AdjoiningPropertyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdjoiningPropertyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdjoiningProperty.
     * @param {AdjoiningPropertyUpsertArgs} args - Arguments to update or create a AdjoiningProperty.
     * @example
     * // Update or create a AdjoiningProperty
     * const adjoiningProperty = await prisma.adjoiningProperty.upsert({
     *   create: {
     *     // ... data to create a AdjoiningProperty
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdjoiningProperty we want to update
     *   }
     * })
     */
    upsert<T extends AdjoiningPropertyUpsertArgs>(args: SelectSubset<T, AdjoiningPropertyUpsertArgs<ExtArgs>>): Prisma__AdjoiningPropertyClient<$Result.GetResult<Prisma.$AdjoiningPropertyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdjoiningProperties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdjoiningPropertyCountArgs} args - Arguments to filter AdjoiningProperties to count.
     * @example
     * // Count the number of AdjoiningProperties
     * const count = await prisma.adjoiningProperty.count({
     *   where: {
     *     // ... the filter for the AdjoiningProperties we want to count
     *   }
     * })
    **/
    count<T extends AdjoiningPropertyCountArgs>(
      args?: Subset<T, AdjoiningPropertyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdjoiningPropertyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdjoiningProperty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdjoiningPropertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdjoiningPropertyAggregateArgs>(args: Subset<T, AdjoiningPropertyAggregateArgs>): Prisma.PrismaPromise<GetAdjoiningPropertyAggregateType<T>>

    /**
     * Group by AdjoiningProperty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdjoiningPropertyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdjoiningPropertyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdjoiningPropertyGroupByArgs['orderBy'] }
        : { orderBy?: AdjoiningPropertyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdjoiningPropertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdjoiningPropertyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdjoiningProperty model
   */
  readonly fields: AdjoiningPropertyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdjoiningProperty.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdjoiningPropertyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    job<T extends JobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobDefaultArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    owners<T extends AdjoiningProperty$ownersArgs<ExtArgs> = {}>(args?: Subset<T, AdjoiningProperty$ownersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdjoiningProperty model
   */
  interface AdjoiningPropertyFieldRefs {
    readonly id: FieldRef<"AdjoiningProperty", 'String'>
    readonly jobId: FieldRef<"AdjoiningProperty", 'String'>
    readonly addressLine1: FieldRef<"AdjoiningProperty", 'String'>
    readonly addressLine2: FieldRef<"AdjoiningProperty", 'String'>
    readonly postcode: FieldRef<"AdjoiningProperty", 'String'>
    readonly createdAt: FieldRef<"AdjoiningProperty", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdjoiningProperty findUnique
   */
  export type AdjoiningPropertyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdjoiningProperty
     */
    select?: AdjoiningPropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdjoiningProperty
     */
    omit?: AdjoiningPropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdjoiningPropertyInclude<ExtArgs> | null
    /**
     * Filter, which AdjoiningProperty to fetch.
     */
    where: AdjoiningPropertyWhereUniqueInput
  }

  /**
   * AdjoiningProperty findUniqueOrThrow
   */
  export type AdjoiningPropertyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdjoiningProperty
     */
    select?: AdjoiningPropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdjoiningProperty
     */
    omit?: AdjoiningPropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdjoiningPropertyInclude<ExtArgs> | null
    /**
     * Filter, which AdjoiningProperty to fetch.
     */
    where: AdjoiningPropertyWhereUniqueInput
  }

  /**
   * AdjoiningProperty findFirst
   */
  export type AdjoiningPropertyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdjoiningProperty
     */
    select?: AdjoiningPropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdjoiningProperty
     */
    omit?: AdjoiningPropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdjoiningPropertyInclude<ExtArgs> | null
    /**
     * Filter, which AdjoiningProperty to fetch.
     */
    where?: AdjoiningPropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdjoiningProperties to fetch.
     */
    orderBy?: AdjoiningPropertyOrderByWithRelationInput | AdjoiningPropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdjoiningProperties.
     */
    cursor?: AdjoiningPropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdjoiningProperties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdjoiningProperties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdjoiningProperties.
     */
    distinct?: AdjoiningPropertyScalarFieldEnum | AdjoiningPropertyScalarFieldEnum[]
  }

  /**
   * AdjoiningProperty findFirstOrThrow
   */
  export type AdjoiningPropertyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdjoiningProperty
     */
    select?: AdjoiningPropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdjoiningProperty
     */
    omit?: AdjoiningPropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdjoiningPropertyInclude<ExtArgs> | null
    /**
     * Filter, which AdjoiningProperty to fetch.
     */
    where?: AdjoiningPropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdjoiningProperties to fetch.
     */
    orderBy?: AdjoiningPropertyOrderByWithRelationInput | AdjoiningPropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdjoiningProperties.
     */
    cursor?: AdjoiningPropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdjoiningProperties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdjoiningProperties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdjoiningProperties.
     */
    distinct?: AdjoiningPropertyScalarFieldEnum | AdjoiningPropertyScalarFieldEnum[]
  }

  /**
   * AdjoiningProperty findMany
   */
  export type AdjoiningPropertyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdjoiningProperty
     */
    select?: AdjoiningPropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdjoiningProperty
     */
    omit?: AdjoiningPropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdjoiningPropertyInclude<ExtArgs> | null
    /**
     * Filter, which AdjoiningProperties to fetch.
     */
    where?: AdjoiningPropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdjoiningProperties to fetch.
     */
    orderBy?: AdjoiningPropertyOrderByWithRelationInput | AdjoiningPropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdjoiningProperties.
     */
    cursor?: AdjoiningPropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdjoiningProperties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdjoiningProperties.
     */
    skip?: number
    distinct?: AdjoiningPropertyScalarFieldEnum | AdjoiningPropertyScalarFieldEnum[]
  }

  /**
   * AdjoiningProperty create
   */
  export type AdjoiningPropertyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdjoiningProperty
     */
    select?: AdjoiningPropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdjoiningProperty
     */
    omit?: AdjoiningPropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdjoiningPropertyInclude<ExtArgs> | null
    /**
     * The data needed to create a AdjoiningProperty.
     */
    data: XOR<AdjoiningPropertyCreateInput, AdjoiningPropertyUncheckedCreateInput>
  }

  /**
   * AdjoiningProperty createMany
   */
  export type AdjoiningPropertyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdjoiningProperties.
     */
    data: AdjoiningPropertyCreateManyInput | AdjoiningPropertyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdjoiningProperty createManyAndReturn
   */
  export type AdjoiningPropertyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdjoiningProperty
     */
    select?: AdjoiningPropertySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdjoiningProperty
     */
    omit?: AdjoiningPropertyOmit<ExtArgs> | null
    /**
     * The data used to create many AdjoiningProperties.
     */
    data: AdjoiningPropertyCreateManyInput | AdjoiningPropertyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdjoiningPropertyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdjoiningProperty update
   */
  export type AdjoiningPropertyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdjoiningProperty
     */
    select?: AdjoiningPropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdjoiningProperty
     */
    omit?: AdjoiningPropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdjoiningPropertyInclude<ExtArgs> | null
    /**
     * The data needed to update a AdjoiningProperty.
     */
    data: XOR<AdjoiningPropertyUpdateInput, AdjoiningPropertyUncheckedUpdateInput>
    /**
     * Choose, which AdjoiningProperty to update.
     */
    where: AdjoiningPropertyWhereUniqueInput
  }

  /**
   * AdjoiningProperty updateMany
   */
  export type AdjoiningPropertyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdjoiningProperties.
     */
    data: XOR<AdjoiningPropertyUpdateManyMutationInput, AdjoiningPropertyUncheckedUpdateManyInput>
    /**
     * Filter which AdjoiningProperties to update
     */
    where?: AdjoiningPropertyWhereInput
    /**
     * Limit how many AdjoiningProperties to update.
     */
    limit?: number
  }

  /**
   * AdjoiningProperty updateManyAndReturn
   */
  export type AdjoiningPropertyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdjoiningProperty
     */
    select?: AdjoiningPropertySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdjoiningProperty
     */
    omit?: AdjoiningPropertyOmit<ExtArgs> | null
    /**
     * The data used to update AdjoiningProperties.
     */
    data: XOR<AdjoiningPropertyUpdateManyMutationInput, AdjoiningPropertyUncheckedUpdateManyInput>
    /**
     * Filter which AdjoiningProperties to update
     */
    where?: AdjoiningPropertyWhereInput
    /**
     * Limit how many AdjoiningProperties to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdjoiningPropertyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdjoiningProperty upsert
   */
  export type AdjoiningPropertyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdjoiningProperty
     */
    select?: AdjoiningPropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdjoiningProperty
     */
    omit?: AdjoiningPropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdjoiningPropertyInclude<ExtArgs> | null
    /**
     * The filter to search for the AdjoiningProperty to update in case it exists.
     */
    where: AdjoiningPropertyWhereUniqueInput
    /**
     * In case the AdjoiningProperty found by the `where` argument doesn't exist, create a new AdjoiningProperty with this data.
     */
    create: XOR<AdjoiningPropertyCreateInput, AdjoiningPropertyUncheckedCreateInput>
    /**
     * In case the AdjoiningProperty was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdjoiningPropertyUpdateInput, AdjoiningPropertyUncheckedUpdateInput>
  }

  /**
   * AdjoiningProperty delete
   */
  export type AdjoiningPropertyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdjoiningProperty
     */
    select?: AdjoiningPropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdjoiningProperty
     */
    omit?: AdjoiningPropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdjoiningPropertyInclude<ExtArgs> | null
    /**
     * Filter which AdjoiningProperty to delete.
     */
    where: AdjoiningPropertyWhereUniqueInput
  }

  /**
   * AdjoiningProperty deleteMany
   */
  export type AdjoiningPropertyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdjoiningProperties to delete
     */
    where?: AdjoiningPropertyWhereInput
    /**
     * Limit how many AdjoiningProperties to delete.
     */
    limit?: number
  }

  /**
   * AdjoiningProperty.owners
   */
  export type AdjoiningProperty$ownersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    where?: OwnerWhereInput
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    cursor?: OwnerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[]
  }

  /**
   * AdjoiningProperty without action
   */
  export type AdjoiningPropertyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdjoiningProperty
     */
    select?: AdjoiningPropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdjoiningProperty
     */
    omit?: AdjoiningPropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdjoiningPropertyInclude<ExtArgs> | null
  }


  /**
   * Model Owner
   */

  export type AggregateOwner = {
    _count: OwnerCountAggregateOutputType | null
    _min: OwnerMinAggregateOutputType | null
    _max: OwnerMaxAggregateOutputType | null
  }

  export type OwnerMinAggregateOutputType = {
    id: string | null
    propertyId: string | null
    fullName: string | null
    email: string | null
    phone: string | null
    ownershipType: $Enums.OwnershipType | null
    createdAt: Date | null
  }

  export type OwnerMaxAggregateOutputType = {
    id: string | null
    propertyId: string | null
    fullName: string | null
    email: string | null
    phone: string | null
    ownershipType: $Enums.OwnershipType | null
    createdAt: Date | null
  }

  export type OwnerCountAggregateOutputType = {
    id: number
    propertyId: number
    fullName: number
    email: number
    phone: number
    ownershipType: number
    createdAt: number
    _all: number
  }


  export type OwnerMinAggregateInputType = {
    id?: true
    propertyId?: true
    fullName?: true
    email?: true
    phone?: true
    ownershipType?: true
    createdAt?: true
  }

  export type OwnerMaxAggregateInputType = {
    id?: true
    propertyId?: true
    fullName?: true
    email?: true
    phone?: true
    ownershipType?: true
    createdAt?: true
  }

  export type OwnerCountAggregateInputType = {
    id?: true
    propertyId?: true
    fullName?: true
    email?: true
    phone?: true
    ownershipType?: true
    createdAt?: true
    _all?: true
  }

  export type OwnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Owner to aggregate.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Owners
    **/
    _count?: true | OwnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OwnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OwnerMaxAggregateInputType
  }

  export type GetOwnerAggregateType<T extends OwnerAggregateArgs> = {
        [P in keyof T & keyof AggregateOwner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOwner[P]>
      : GetScalarType<T[P], AggregateOwner[P]>
  }




  export type OwnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OwnerWhereInput
    orderBy?: OwnerOrderByWithAggregationInput | OwnerOrderByWithAggregationInput[]
    by: OwnerScalarFieldEnum[] | OwnerScalarFieldEnum
    having?: OwnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OwnerCountAggregateInputType | true
    _min?: OwnerMinAggregateInputType
    _max?: OwnerMaxAggregateInputType
  }

  export type OwnerGroupByOutputType = {
    id: string
    propertyId: string
    fullName: string
    email: string | null
    phone: string | null
    ownershipType: $Enums.OwnershipType | null
    createdAt: Date
    _count: OwnerCountAggregateOutputType | null
    _min: OwnerMinAggregateOutputType | null
    _max: OwnerMaxAggregateOutputType | null
  }

  type GetOwnerGroupByPayload<T extends OwnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OwnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OwnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OwnerGroupByOutputType[P]>
            : GetScalarType<T[P], OwnerGroupByOutputType[P]>
        }
      >
    >


  export type OwnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    ownershipType?: boolean
    createdAt?: boolean
    adjoiningProperty?: boolean | AdjoiningPropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["owner"]>

  export type OwnerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    ownershipType?: boolean
    createdAt?: boolean
    adjoiningProperty?: boolean | AdjoiningPropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["owner"]>

  export type OwnerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    ownershipType?: boolean
    createdAt?: boolean
    adjoiningProperty?: boolean | AdjoiningPropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["owner"]>

  export type OwnerSelectScalar = {
    id?: boolean
    propertyId?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    ownershipType?: boolean
    createdAt?: boolean
  }

  export type OwnerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "propertyId" | "fullName" | "email" | "phone" | "ownershipType" | "createdAt", ExtArgs["result"]["owner"]>
  export type OwnerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adjoiningProperty?: boolean | AdjoiningPropertyDefaultArgs<ExtArgs>
  }
  export type OwnerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adjoiningProperty?: boolean | AdjoiningPropertyDefaultArgs<ExtArgs>
  }
  export type OwnerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adjoiningProperty?: boolean | AdjoiningPropertyDefaultArgs<ExtArgs>
  }

  export type $OwnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Owner"
    objects: {
      adjoiningProperty: Prisma.$AdjoiningPropertyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      propertyId: string
      fullName: string
      email: string | null
      phone: string | null
      ownershipType: $Enums.OwnershipType | null
      createdAt: Date
    }, ExtArgs["result"]["owner"]>
    composites: {}
  }

  type OwnerGetPayload<S extends boolean | null | undefined | OwnerDefaultArgs> = $Result.GetResult<Prisma.$OwnerPayload, S>

  type OwnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OwnerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OwnerCountAggregateInputType | true
    }

  export interface OwnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Owner'], meta: { name: 'Owner' } }
    /**
     * Find zero or one Owner that matches the filter.
     * @param {OwnerFindUniqueArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OwnerFindUniqueArgs>(args: SelectSubset<T, OwnerFindUniqueArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Owner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OwnerFindUniqueOrThrowArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OwnerFindUniqueOrThrowArgs>(args: SelectSubset<T, OwnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Owner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindFirstArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OwnerFindFirstArgs>(args?: SelectSubset<T, OwnerFindFirstArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Owner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindFirstOrThrowArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OwnerFindFirstOrThrowArgs>(args?: SelectSubset<T, OwnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Owners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Owners
     * const owners = await prisma.owner.findMany()
     * 
     * // Get first 10 Owners
     * const owners = await prisma.owner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ownerWithIdOnly = await prisma.owner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OwnerFindManyArgs>(args?: SelectSubset<T, OwnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Owner.
     * @param {OwnerCreateArgs} args - Arguments to create a Owner.
     * @example
     * // Create one Owner
     * const Owner = await prisma.owner.create({
     *   data: {
     *     // ... data to create a Owner
     *   }
     * })
     * 
     */
    create<T extends OwnerCreateArgs>(args: SelectSubset<T, OwnerCreateArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Owners.
     * @param {OwnerCreateManyArgs} args - Arguments to create many Owners.
     * @example
     * // Create many Owners
     * const owner = await prisma.owner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OwnerCreateManyArgs>(args?: SelectSubset<T, OwnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Owners and returns the data saved in the database.
     * @param {OwnerCreateManyAndReturnArgs} args - Arguments to create many Owners.
     * @example
     * // Create many Owners
     * const owner = await prisma.owner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Owners and only return the `id`
     * const ownerWithIdOnly = await prisma.owner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OwnerCreateManyAndReturnArgs>(args?: SelectSubset<T, OwnerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Owner.
     * @param {OwnerDeleteArgs} args - Arguments to delete one Owner.
     * @example
     * // Delete one Owner
     * const Owner = await prisma.owner.delete({
     *   where: {
     *     // ... filter to delete one Owner
     *   }
     * })
     * 
     */
    delete<T extends OwnerDeleteArgs>(args: SelectSubset<T, OwnerDeleteArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Owner.
     * @param {OwnerUpdateArgs} args - Arguments to update one Owner.
     * @example
     * // Update one Owner
     * const owner = await prisma.owner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OwnerUpdateArgs>(args: SelectSubset<T, OwnerUpdateArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Owners.
     * @param {OwnerDeleteManyArgs} args - Arguments to filter Owners to delete.
     * @example
     * // Delete a few Owners
     * const { count } = await prisma.owner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OwnerDeleteManyArgs>(args?: SelectSubset<T, OwnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Owners
     * const owner = await prisma.owner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OwnerUpdateManyArgs>(args: SelectSubset<T, OwnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Owners and returns the data updated in the database.
     * @param {OwnerUpdateManyAndReturnArgs} args - Arguments to update many Owners.
     * @example
     * // Update many Owners
     * const owner = await prisma.owner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Owners and only return the `id`
     * const ownerWithIdOnly = await prisma.owner.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OwnerUpdateManyAndReturnArgs>(args: SelectSubset<T, OwnerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Owner.
     * @param {OwnerUpsertArgs} args - Arguments to update or create a Owner.
     * @example
     * // Update or create a Owner
     * const owner = await prisma.owner.upsert({
     *   create: {
     *     // ... data to create a Owner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Owner we want to update
     *   }
     * })
     */
    upsert<T extends OwnerUpsertArgs>(args: SelectSubset<T, OwnerUpsertArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerCountArgs} args - Arguments to filter Owners to count.
     * @example
     * // Count the number of Owners
     * const count = await prisma.owner.count({
     *   where: {
     *     // ... the filter for the Owners we want to count
     *   }
     * })
    **/
    count<T extends OwnerCountArgs>(
      args?: Subset<T, OwnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OwnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OwnerAggregateArgs>(args: Subset<T, OwnerAggregateArgs>): Prisma.PrismaPromise<GetOwnerAggregateType<T>>

    /**
     * Group by Owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OwnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OwnerGroupByArgs['orderBy'] }
        : { orderBy?: OwnerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OwnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOwnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Owner model
   */
  readonly fields: OwnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Owner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OwnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    adjoiningProperty<T extends AdjoiningPropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdjoiningPropertyDefaultArgs<ExtArgs>>): Prisma__AdjoiningPropertyClient<$Result.GetResult<Prisma.$AdjoiningPropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Owner model
   */
  interface OwnerFieldRefs {
    readonly id: FieldRef<"Owner", 'String'>
    readonly propertyId: FieldRef<"Owner", 'String'>
    readonly fullName: FieldRef<"Owner", 'String'>
    readonly email: FieldRef<"Owner", 'String'>
    readonly phone: FieldRef<"Owner", 'String'>
    readonly ownershipType: FieldRef<"Owner", 'OwnershipType'>
    readonly createdAt: FieldRef<"Owner", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Owner findUnique
   */
  export type OwnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner findUniqueOrThrow
   */
  export type OwnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner findFirst
   */
  export type OwnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Owners.
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Owners.
     */
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[]
  }

  /**
   * Owner findFirstOrThrow
   */
  export type OwnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Owners.
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Owners.
     */
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[]
  }

  /**
   * Owner findMany
   */
  export type OwnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owners to fetch.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Owners.
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[]
  }

  /**
   * Owner create
   */
  export type OwnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * The data needed to create a Owner.
     */
    data: XOR<OwnerCreateInput, OwnerUncheckedCreateInput>
  }

  /**
   * Owner createMany
   */
  export type OwnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Owners.
     */
    data: OwnerCreateManyInput | OwnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Owner createManyAndReturn
   */
  export type OwnerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * The data used to create many Owners.
     */
    data: OwnerCreateManyInput | OwnerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Owner update
   */
  export type OwnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * The data needed to update a Owner.
     */
    data: XOR<OwnerUpdateInput, OwnerUncheckedUpdateInput>
    /**
     * Choose, which Owner to update.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner updateMany
   */
  export type OwnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Owners.
     */
    data: XOR<OwnerUpdateManyMutationInput, OwnerUncheckedUpdateManyInput>
    /**
     * Filter which Owners to update
     */
    where?: OwnerWhereInput
    /**
     * Limit how many Owners to update.
     */
    limit?: number
  }

  /**
   * Owner updateManyAndReturn
   */
  export type OwnerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * The data used to update Owners.
     */
    data: XOR<OwnerUpdateManyMutationInput, OwnerUncheckedUpdateManyInput>
    /**
     * Filter which Owners to update
     */
    where?: OwnerWhereInput
    /**
     * Limit how many Owners to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Owner upsert
   */
  export type OwnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * The filter to search for the Owner to update in case it exists.
     */
    where: OwnerWhereUniqueInput
    /**
     * In case the Owner found by the `where` argument doesn't exist, create a new Owner with this data.
     */
    create: XOR<OwnerCreateInput, OwnerUncheckedCreateInput>
    /**
     * In case the Owner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OwnerUpdateInput, OwnerUncheckedUpdateInput>
  }

  /**
   * Owner delete
   */
  export type OwnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter which Owner to delete.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner deleteMany
   */
  export type OwnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Owners to delete
     */
    where?: OwnerWhereInput
    /**
     * Limit how many Owners to delete.
     */
    limit?: number
  }

  /**
   * Owner without action
   */
  export type OwnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
  }


  /**
   * Model DocumentTemplate
   */

  export type AggregateDocumentTemplate = {
    _count: DocumentTemplateCountAggregateOutputType | null
    _min: DocumentTemplateMinAggregateOutputType | null
    _max: DocumentTemplateMaxAggregateOutputType | null
  }

  export type DocumentTemplateMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    fileUrl: string | null
    createdAt: Date | null
  }

  export type DocumentTemplateMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    fileUrl: string | null
    createdAt: Date | null
  }

  export type DocumentTemplateCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    description: number
    fileUrl: number
    tagsUsed: number
    createdAt: number
    _all: number
  }


  export type DocumentTemplateMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    fileUrl?: true
    createdAt?: true
  }

  export type DocumentTemplateMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    fileUrl?: true
    createdAt?: true
  }

  export type DocumentTemplateCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    fileUrl?: true
    tagsUsed?: true
    createdAt?: true
    _all?: true
  }

  export type DocumentTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentTemplate to aggregate.
     */
    where?: DocumentTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentTemplates to fetch.
     */
    orderBy?: DocumentTemplateOrderByWithRelationInput | DocumentTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocumentTemplates
    **/
    _count?: true | DocumentTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentTemplateMaxAggregateInputType
  }

  export type GetDocumentTemplateAggregateType<T extends DocumentTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentTemplate[P]>
      : GetScalarType<T[P], AggregateDocumentTemplate[P]>
  }




  export type DocumentTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentTemplateWhereInput
    orderBy?: DocumentTemplateOrderByWithAggregationInput | DocumentTemplateOrderByWithAggregationInput[]
    by: DocumentTemplateScalarFieldEnum[] | DocumentTemplateScalarFieldEnum
    having?: DocumentTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentTemplateCountAggregateInputType | true
    _min?: DocumentTemplateMinAggregateInputType
    _max?: DocumentTemplateMaxAggregateInputType
  }

  export type DocumentTemplateGroupByOutputType = {
    id: string
    userId: string
    name: string
    description: string | null
    fileUrl: string
    tagsUsed: string[]
    createdAt: Date
    _count: DocumentTemplateCountAggregateOutputType | null
    _min: DocumentTemplateMinAggregateOutputType | null
    _max: DocumentTemplateMaxAggregateOutputType | null
  }

  type GetDocumentTemplateGroupByPayload<T extends DocumentTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentTemplateGroupByOutputType[P]>
        }
      >
    >


  export type DocumentTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    fileUrl?: boolean
    tagsUsed?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    generatedDocs?: boolean | DocumentTemplate$generatedDocsArgs<ExtArgs>
    _count?: boolean | DocumentTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentTemplate"]>

  export type DocumentTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    fileUrl?: boolean
    tagsUsed?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentTemplate"]>

  export type DocumentTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    fileUrl?: boolean
    tagsUsed?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentTemplate"]>

  export type DocumentTemplateSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    fileUrl?: boolean
    tagsUsed?: boolean
    createdAt?: boolean
  }

  export type DocumentTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "description" | "fileUrl" | "tagsUsed" | "createdAt", ExtArgs["result"]["documentTemplate"]>
  export type DocumentTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    generatedDocs?: boolean | DocumentTemplate$generatedDocsArgs<ExtArgs>
    _count?: boolean | DocumentTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DocumentTemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DocumentTemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DocumentTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocumentTemplate"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      generatedDocs: Prisma.$GeneratedDocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      description: string | null
      fileUrl: string
      tagsUsed: string[]
      createdAt: Date
    }, ExtArgs["result"]["documentTemplate"]>
    composites: {}
  }

  type DocumentTemplateGetPayload<S extends boolean | null | undefined | DocumentTemplateDefaultArgs> = $Result.GetResult<Prisma.$DocumentTemplatePayload, S>

  type DocumentTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentTemplateCountAggregateInputType | true
    }

  export interface DocumentTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocumentTemplate'], meta: { name: 'DocumentTemplate' } }
    /**
     * Find zero or one DocumentTemplate that matches the filter.
     * @param {DocumentTemplateFindUniqueArgs} args - Arguments to find a DocumentTemplate
     * @example
     * // Get one DocumentTemplate
     * const documentTemplate = await prisma.documentTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentTemplateFindUniqueArgs>(args: SelectSubset<T, DocumentTemplateFindUniqueArgs<ExtArgs>>): Prisma__DocumentTemplateClient<$Result.GetResult<Prisma.$DocumentTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DocumentTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentTemplateFindUniqueOrThrowArgs} args - Arguments to find a DocumentTemplate
     * @example
     * // Get one DocumentTemplate
     * const documentTemplate = await prisma.documentTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentTemplateClient<$Result.GetResult<Prisma.$DocumentTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTemplateFindFirstArgs} args - Arguments to find a DocumentTemplate
     * @example
     * // Get one DocumentTemplate
     * const documentTemplate = await prisma.documentTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentTemplateFindFirstArgs>(args?: SelectSubset<T, DocumentTemplateFindFirstArgs<ExtArgs>>): Prisma__DocumentTemplateClient<$Result.GetResult<Prisma.$DocumentTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTemplateFindFirstOrThrowArgs} args - Arguments to find a DocumentTemplate
     * @example
     * // Get one DocumentTemplate
     * const documentTemplate = await prisma.documentTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentTemplateClient<$Result.GetResult<Prisma.$DocumentTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocumentTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentTemplates
     * const documentTemplates = await prisma.documentTemplate.findMany()
     * 
     * // Get first 10 DocumentTemplates
     * const documentTemplates = await prisma.documentTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentTemplateWithIdOnly = await prisma.documentTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentTemplateFindManyArgs>(args?: SelectSubset<T, DocumentTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DocumentTemplate.
     * @param {DocumentTemplateCreateArgs} args - Arguments to create a DocumentTemplate.
     * @example
     * // Create one DocumentTemplate
     * const DocumentTemplate = await prisma.documentTemplate.create({
     *   data: {
     *     // ... data to create a DocumentTemplate
     *   }
     * })
     * 
     */
    create<T extends DocumentTemplateCreateArgs>(args: SelectSubset<T, DocumentTemplateCreateArgs<ExtArgs>>): Prisma__DocumentTemplateClient<$Result.GetResult<Prisma.$DocumentTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DocumentTemplates.
     * @param {DocumentTemplateCreateManyArgs} args - Arguments to create many DocumentTemplates.
     * @example
     * // Create many DocumentTemplates
     * const documentTemplate = await prisma.documentTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentTemplateCreateManyArgs>(args?: SelectSubset<T, DocumentTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DocumentTemplates and returns the data saved in the database.
     * @param {DocumentTemplateCreateManyAndReturnArgs} args - Arguments to create many DocumentTemplates.
     * @example
     * // Create many DocumentTemplates
     * const documentTemplate = await prisma.documentTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DocumentTemplates and only return the `id`
     * const documentTemplateWithIdOnly = await prisma.documentTemplate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DocumentTemplate.
     * @param {DocumentTemplateDeleteArgs} args - Arguments to delete one DocumentTemplate.
     * @example
     * // Delete one DocumentTemplate
     * const DocumentTemplate = await prisma.documentTemplate.delete({
     *   where: {
     *     // ... filter to delete one DocumentTemplate
     *   }
     * })
     * 
     */
    delete<T extends DocumentTemplateDeleteArgs>(args: SelectSubset<T, DocumentTemplateDeleteArgs<ExtArgs>>): Prisma__DocumentTemplateClient<$Result.GetResult<Prisma.$DocumentTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DocumentTemplate.
     * @param {DocumentTemplateUpdateArgs} args - Arguments to update one DocumentTemplate.
     * @example
     * // Update one DocumentTemplate
     * const documentTemplate = await prisma.documentTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentTemplateUpdateArgs>(args: SelectSubset<T, DocumentTemplateUpdateArgs<ExtArgs>>): Prisma__DocumentTemplateClient<$Result.GetResult<Prisma.$DocumentTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DocumentTemplates.
     * @param {DocumentTemplateDeleteManyArgs} args - Arguments to filter DocumentTemplates to delete.
     * @example
     * // Delete a few DocumentTemplates
     * const { count } = await prisma.documentTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentTemplateDeleteManyArgs>(args?: SelectSubset<T, DocumentTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentTemplates
     * const documentTemplate = await prisma.documentTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentTemplateUpdateManyArgs>(args: SelectSubset<T, DocumentTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentTemplates and returns the data updated in the database.
     * @param {DocumentTemplateUpdateManyAndReturnArgs} args - Arguments to update many DocumentTemplates.
     * @example
     * // Update many DocumentTemplates
     * const documentTemplate = await prisma.documentTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DocumentTemplates and only return the `id`
     * const documentTemplateWithIdOnly = await prisma.documentTemplate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentTemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DocumentTemplate.
     * @param {DocumentTemplateUpsertArgs} args - Arguments to update or create a DocumentTemplate.
     * @example
     * // Update or create a DocumentTemplate
     * const documentTemplate = await prisma.documentTemplate.upsert({
     *   create: {
     *     // ... data to create a DocumentTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentTemplate we want to update
     *   }
     * })
     */
    upsert<T extends DocumentTemplateUpsertArgs>(args: SelectSubset<T, DocumentTemplateUpsertArgs<ExtArgs>>): Prisma__DocumentTemplateClient<$Result.GetResult<Prisma.$DocumentTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DocumentTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTemplateCountArgs} args - Arguments to filter DocumentTemplates to count.
     * @example
     * // Count the number of DocumentTemplates
     * const count = await prisma.documentTemplate.count({
     *   where: {
     *     // ... the filter for the DocumentTemplates we want to count
     *   }
     * })
    **/
    count<T extends DocumentTemplateCountArgs>(
      args?: Subset<T, DocumentTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocumentTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentTemplateAggregateArgs>(args: Subset<T, DocumentTemplateAggregateArgs>): Prisma.PrismaPromise<GetDocumentTemplateAggregateType<T>>

    /**
     * Group by DocumentTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentTemplateGroupByArgs['orderBy'] }
        : { orderBy?: DocumentTemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocumentTemplate model
   */
  readonly fields: DocumentTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocumentTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    generatedDocs<T extends DocumentTemplate$generatedDocsArgs<ExtArgs> = {}>(args?: Subset<T, DocumentTemplate$generatedDocsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DocumentTemplate model
   */
  interface DocumentTemplateFieldRefs {
    readonly id: FieldRef<"DocumentTemplate", 'String'>
    readonly userId: FieldRef<"DocumentTemplate", 'String'>
    readonly name: FieldRef<"DocumentTemplate", 'String'>
    readonly description: FieldRef<"DocumentTemplate", 'String'>
    readonly fileUrl: FieldRef<"DocumentTemplate", 'String'>
    readonly tagsUsed: FieldRef<"DocumentTemplate", 'String[]'>
    readonly createdAt: FieldRef<"DocumentTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DocumentTemplate findUnique
   */
  export type DocumentTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTemplate
     */
    select?: DocumentTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTemplate
     */
    omit?: DocumentTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTemplateInclude<ExtArgs> | null
    /**
     * Filter, which DocumentTemplate to fetch.
     */
    where: DocumentTemplateWhereUniqueInput
  }

  /**
   * DocumentTemplate findUniqueOrThrow
   */
  export type DocumentTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTemplate
     */
    select?: DocumentTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTemplate
     */
    omit?: DocumentTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTemplateInclude<ExtArgs> | null
    /**
     * Filter, which DocumentTemplate to fetch.
     */
    where: DocumentTemplateWhereUniqueInput
  }

  /**
   * DocumentTemplate findFirst
   */
  export type DocumentTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTemplate
     */
    select?: DocumentTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTemplate
     */
    omit?: DocumentTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTemplateInclude<ExtArgs> | null
    /**
     * Filter, which DocumentTemplate to fetch.
     */
    where?: DocumentTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentTemplates to fetch.
     */
    orderBy?: DocumentTemplateOrderByWithRelationInput | DocumentTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentTemplates.
     */
    cursor?: DocumentTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentTemplates.
     */
    distinct?: DocumentTemplateScalarFieldEnum | DocumentTemplateScalarFieldEnum[]
  }

  /**
   * DocumentTemplate findFirstOrThrow
   */
  export type DocumentTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTemplate
     */
    select?: DocumentTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTemplate
     */
    omit?: DocumentTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTemplateInclude<ExtArgs> | null
    /**
     * Filter, which DocumentTemplate to fetch.
     */
    where?: DocumentTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentTemplates to fetch.
     */
    orderBy?: DocumentTemplateOrderByWithRelationInput | DocumentTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentTemplates.
     */
    cursor?: DocumentTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentTemplates.
     */
    distinct?: DocumentTemplateScalarFieldEnum | DocumentTemplateScalarFieldEnum[]
  }

  /**
   * DocumentTemplate findMany
   */
  export type DocumentTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTemplate
     */
    select?: DocumentTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTemplate
     */
    omit?: DocumentTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTemplateInclude<ExtArgs> | null
    /**
     * Filter, which DocumentTemplates to fetch.
     */
    where?: DocumentTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentTemplates to fetch.
     */
    orderBy?: DocumentTemplateOrderByWithRelationInput | DocumentTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocumentTemplates.
     */
    cursor?: DocumentTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentTemplates.
     */
    skip?: number
    distinct?: DocumentTemplateScalarFieldEnum | DocumentTemplateScalarFieldEnum[]
  }

  /**
   * DocumentTemplate create
   */
  export type DocumentTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTemplate
     */
    select?: DocumentTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTemplate
     */
    omit?: DocumentTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a DocumentTemplate.
     */
    data: XOR<DocumentTemplateCreateInput, DocumentTemplateUncheckedCreateInput>
  }

  /**
   * DocumentTemplate createMany
   */
  export type DocumentTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocumentTemplates.
     */
    data: DocumentTemplateCreateManyInput | DocumentTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocumentTemplate createManyAndReturn
   */
  export type DocumentTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTemplate
     */
    select?: DocumentTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTemplate
     */
    omit?: DocumentTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many DocumentTemplates.
     */
    data: DocumentTemplateCreateManyInput | DocumentTemplateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTemplateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentTemplate update
   */
  export type DocumentTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTemplate
     */
    select?: DocumentTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTemplate
     */
    omit?: DocumentTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a DocumentTemplate.
     */
    data: XOR<DocumentTemplateUpdateInput, DocumentTemplateUncheckedUpdateInput>
    /**
     * Choose, which DocumentTemplate to update.
     */
    where: DocumentTemplateWhereUniqueInput
  }

  /**
   * DocumentTemplate updateMany
   */
  export type DocumentTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocumentTemplates.
     */
    data: XOR<DocumentTemplateUpdateManyMutationInput, DocumentTemplateUncheckedUpdateManyInput>
    /**
     * Filter which DocumentTemplates to update
     */
    where?: DocumentTemplateWhereInput
    /**
     * Limit how many DocumentTemplates to update.
     */
    limit?: number
  }

  /**
   * DocumentTemplate updateManyAndReturn
   */
  export type DocumentTemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTemplate
     */
    select?: DocumentTemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTemplate
     */
    omit?: DocumentTemplateOmit<ExtArgs> | null
    /**
     * The data used to update DocumentTemplates.
     */
    data: XOR<DocumentTemplateUpdateManyMutationInput, DocumentTemplateUncheckedUpdateManyInput>
    /**
     * Filter which DocumentTemplates to update
     */
    where?: DocumentTemplateWhereInput
    /**
     * Limit how many DocumentTemplates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTemplateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentTemplate upsert
   */
  export type DocumentTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTemplate
     */
    select?: DocumentTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTemplate
     */
    omit?: DocumentTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the DocumentTemplate to update in case it exists.
     */
    where: DocumentTemplateWhereUniqueInput
    /**
     * In case the DocumentTemplate found by the `where` argument doesn't exist, create a new DocumentTemplate with this data.
     */
    create: XOR<DocumentTemplateCreateInput, DocumentTemplateUncheckedCreateInput>
    /**
     * In case the DocumentTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentTemplateUpdateInput, DocumentTemplateUncheckedUpdateInput>
  }

  /**
   * DocumentTemplate delete
   */
  export type DocumentTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTemplate
     */
    select?: DocumentTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTemplate
     */
    omit?: DocumentTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTemplateInclude<ExtArgs> | null
    /**
     * Filter which DocumentTemplate to delete.
     */
    where: DocumentTemplateWhereUniqueInput
  }

  /**
   * DocumentTemplate deleteMany
   */
  export type DocumentTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentTemplates to delete
     */
    where?: DocumentTemplateWhereInput
    /**
     * Limit how many DocumentTemplates to delete.
     */
    limit?: number
  }

  /**
   * DocumentTemplate.generatedDocs
   */
  export type DocumentTemplate$generatedDocsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedDocument
     */
    select?: GeneratedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedDocument
     */
    omit?: GeneratedDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedDocumentInclude<ExtArgs> | null
    where?: GeneratedDocumentWhereInput
    orderBy?: GeneratedDocumentOrderByWithRelationInput | GeneratedDocumentOrderByWithRelationInput[]
    cursor?: GeneratedDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GeneratedDocumentScalarFieldEnum | GeneratedDocumentScalarFieldEnum[]
  }

  /**
   * DocumentTemplate without action
   */
  export type DocumentTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTemplate
     */
    select?: DocumentTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTemplate
     */
    omit?: DocumentTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTemplateInclude<ExtArgs> | null
  }


  /**
   * Model GeneratedDocument
   */

  export type AggregateGeneratedDocument = {
    _count: GeneratedDocumentCountAggregateOutputType | null
    _min: GeneratedDocumentMinAggregateOutputType | null
    _max: GeneratedDocumentMaxAggregateOutputType | null
  }

  export type GeneratedDocumentMinAggregateOutputType = {
    id: string | null
    jobId: string | null
    templateId: string | null
    fileUrl: string | null
    createdAt: Date | null
  }

  export type GeneratedDocumentMaxAggregateOutputType = {
    id: string | null
    jobId: string | null
    templateId: string | null
    fileUrl: string | null
    createdAt: Date | null
  }

  export type GeneratedDocumentCountAggregateOutputType = {
    id: number
    jobId: number
    templateId: number
    fileUrl: number
    createdAt: number
    _all: number
  }


  export type GeneratedDocumentMinAggregateInputType = {
    id?: true
    jobId?: true
    templateId?: true
    fileUrl?: true
    createdAt?: true
  }

  export type GeneratedDocumentMaxAggregateInputType = {
    id?: true
    jobId?: true
    templateId?: true
    fileUrl?: true
    createdAt?: true
  }

  export type GeneratedDocumentCountAggregateInputType = {
    id?: true
    jobId?: true
    templateId?: true
    fileUrl?: true
    createdAt?: true
    _all?: true
  }

  export type GeneratedDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeneratedDocument to aggregate.
     */
    where?: GeneratedDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedDocuments to fetch.
     */
    orderBy?: GeneratedDocumentOrderByWithRelationInput | GeneratedDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GeneratedDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GeneratedDocuments
    **/
    _count?: true | GeneratedDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeneratedDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeneratedDocumentMaxAggregateInputType
  }

  export type GetGeneratedDocumentAggregateType<T extends GeneratedDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateGeneratedDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeneratedDocument[P]>
      : GetScalarType<T[P], AggregateGeneratedDocument[P]>
  }




  export type GeneratedDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneratedDocumentWhereInput
    orderBy?: GeneratedDocumentOrderByWithAggregationInput | GeneratedDocumentOrderByWithAggregationInput[]
    by: GeneratedDocumentScalarFieldEnum[] | GeneratedDocumentScalarFieldEnum
    having?: GeneratedDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeneratedDocumentCountAggregateInputType | true
    _min?: GeneratedDocumentMinAggregateInputType
    _max?: GeneratedDocumentMaxAggregateInputType
  }

  export type GeneratedDocumentGroupByOutputType = {
    id: string
    jobId: string
    templateId: string
    fileUrl: string
    createdAt: Date
    _count: GeneratedDocumentCountAggregateOutputType | null
    _min: GeneratedDocumentMinAggregateOutputType | null
    _max: GeneratedDocumentMaxAggregateOutputType | null
  }

  type GetGeneratedDocumentGroupByPayload<T extends GeneratedDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GeneratedDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeneratedDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeneratedDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], GeneratedDocumentGroupByOutputType[P]>
        }
      >
    >


  export type GeneratedDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    templateId?: boolean
    fileUrl?: boolean
    createdAt?: boolean
    job?: boolean | JobDefaultArgs<ExtArgs>
    template?: boolean | DocumentTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["generatedDocument"]>

  export type GeneratedDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    templateId?: boolean
    fileUrl?: boolean
    createdAt?: boolean
    job?: boolean | JobDefaultArgs<ExtArgs>
    template?: boolean | DocumentTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["generatedDocument"]>

  export type GeneratedDocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    templateId?: boolean
    fileUrl?: boolean
    createdAt?: boolean
    job?: boolean | JobDefaultArgs<ExtArgs>
    template?: boolean | DocumentTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["generatedDocument"]>

  export type GeneratedDocumentSelectScalar = {
    id?: boolean
    jobId?: boolean
    templateId?: boolean
    fileUrl?: boolean
    createdAt?: boolean
  }

  export type GeneratedDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobId" | "templateId" | "fileUrl" | "createdAt", ExtArgs["result"]["generatedDocument"]>
  export type GeneratedDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobDefaultArgs<ExtArgs>
    template?: boolean | DocumentTemplateDefaultArgs<ExtArgs>
  }
  export type GeneratedDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobDefaultArgs<ExtArgs>
    template?: boolean | DocumentTemplateDefaultArgs<ExtArgs>
  }
  export type GeneratedDocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobDefaultArgs<ExtArgs>
    template?: boolean | DocumentTemplateDefaultArgs<ExtArgs>
  }

  export type $GeneratedDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GeneratedDocument"
    objects: {
      job: Prisma.$JobPayload<ExtArgs>
      template: Prisma.$DocumentTemplatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jobId: string
      templateId: string
      fileUrl: string
      createdAt: Date
    }, ExtArgs["result"]["generatedDocument"]>
    composites: {}
  }

  type GeneratedDocumentGetPayload<S extends boolean | null | undefined | GeneratedDocumentDefaultArgs> = $Result.GetResult<Prisma.$GeneratedDocumentPayload, S>

  type GeneratedDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GeneratedDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GeneratedDocumentCountAggregateInputType | true
    }

  export interface GeneratedDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GeneratedDocument'], meta: { name: 'GeneratedDocument' } }
    /**
     * Find zero or one GeneratedDocument that matches the filter.
     * @param {GeneratedDocumentFindUniqueArgs} args - Arguments to find a GeneratedDocument
     * @example
     * // Get one GeneratedDocument
     * const generatedDocument = await prisma.generatedDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GeneratedDocumentFindUniqueArgs>(args: SelectSubset<T, GeneratedDocumentFindUniqueArgs<ExtArgs>>): Prisma__GeneratedDocumentClient<$Result.GetResult<Prisma.$GeneratedDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GeneratedDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GeneratedDocumentFindUniqueOrThrowArgs} args - Arguments to find a GeneratedDocument
     * @example
     * // Get one GeneratedDocument
     * const generatedDocument = await prisma.generatedDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GeneratedDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, GeneratedDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GeneratedDocumentClient<$Result.GetResult<Prisma.$GeneratedDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GeneratedDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedDocumentFindFirstArgs} args - Arguments to find a GeneratedDocument
     * @example
     * // Get one GeneratedDocument
     * const generatedDocument = await prisma.generatedDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GeneratedDocumentFindFirstArgs>(args?: SelectSubset<T, GeneratedDocumentFindFirstArgs<ExtArgs>>): Prisma__GeneratedDocumentClient<$Result.GetResult<Prisma.$GeneratedDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GeneratedDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedDocumentFindFirstOrThrowArgs} args - Arguments to find a GeneratedDocument
     * @example
     * // Get one GeneratedDocument
     * const generatedDocument = await prisma.generatedDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GeneratedDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, GeneratedDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__GeneratedDocumentClient<$Result.GetResult<Prisma.$GeneratedDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GeneratedDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GeneratedDocuments
     * const generatedDocuments = await prisma.generatedDocument.findMany()
     * 
     * // Get first 10 GeneratedDocuments
     * const generatedDocuments = await prisma.generatedDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const generatedDocumentWithIdOnly = await prisma.generatedDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GeneratedDocumentFindManyArgs>(args?: SelectSubset<T, GeneratedDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GeneratedDocument.
     * @param {GeneratedDocumentCreateArgs} args - Arguments to create a GeneratedDocument.
     * @example
     * // Create one GeneratedDocument
     * const GeneratedDocument = await prisma.generatedDocument.create({
     *   data: {
     *     // ... data to create a GeneratedDocument
     *   }
     * })
     * 
     */
    create<T extends GeneratedDocumentCreateArgs>(args: SelectSubset<T, GeneratedDocumentCreateArgs<ExtArgs>>): Prisma__GeneratedDocumentClient<$Result.GetResult<Prisma.$GeneratedDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GeneratedDocuments.
     * @param {GeneratedDocumentCreateManyArgs} args - Arguments to create many GeneratedDocuments.
     * @example
     * // Create many GeneratedDocuments
     * const generatedDocument = await prisma.generatedDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GeneratedDocumentCreateManyArgs>(args?: SelectSubset<T, GeneratedDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GeneratedDocuments and returns the data saved in the database.
     * @param {GeneratedDocumentCreateManyAndReturnArgs} args - Arguments to create many GeneratedDocuments.
     * @example
     * // Create many GeneratedDocuments
     * const generatedDocument = await prisma.generatedDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GeneratedDocuments and only return the `id`
     * const generatedDocumentWithIdOnly = await prisma.generatedDocument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GeneratedDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, GeneratedDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GeneratedDocument.
     * @param {GeneratedDocumentDeleteArgs} args - Arguments to delete one GeneratedDocument.
     * @example
     * // Delete one GeneratedDocument
     * const GeneratedDocument = await prisma.generatedDocument.delete({
     *   where: {
     *     // ... filter to delete one GeneratedDocument
     *   }
     * })
     * 
     */
    delete<T extends GeneratedDocumentDeleteArgs>(args: SelectSubset<T, GeneratedDocumentDeleteArgs<ExtArgs>>): Prisma__GeneratedDocumentClient<$Result.GetResult<Prisma.$GeneratedDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GeneratedDocument.
     * @param {GeneratedDocumentUpdateArgs} args - Arguments to update one GeneratedDocument.
     * @example
     * // Update one GeneratedDocument
     * const generatedDocument = await prisma.generatedDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GeneratedDocumentUpdateArgs>(args: SelectSubset<T, GeneratedDocumentUpdateArgs<ExtArgs>>): Prisma__GeneratedDocumentClient<$Result.GetResult<Prisma.$GeneratedDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GeneratedDocuments.
     * @param {GeneratedDocumentDeleteManyArgs} args - Arguments to filter GeneratedDocuments to delete.
     * @example
     * // Delete a few GeneratedDocuments
     * const { count } = await prisma.generatedDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GeneratedDocumentDeleteManyArgs>(args?: SelectSubset<T, GeneratedDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GeneratedDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GeneratedDocuments
     * const generatedDocument = await prisma.generatedDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GeneratedDocumentUpdateManyArgs>(args: SelectSubset<T, GeneratedDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GeneratedDocuments and returns the data updated in the database.
     * @param {GeneratedDocumentUpdateManyAndReturnArgs} args - Arguments to update many GeneratedDocuments.
     * @example
     * // Update many GeneratedDocuments
     * const generatedDocument = await prisma.generatedDocument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GeneratedDocuments and only return the `id`
     * const generatedDocumentWithIdOnly = await prisma.generatedDocument.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GeneratedDocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, GeneratedDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GeneratedDocument.
     * @param {GeneratedDocumentUpsertArgs} args - Arguments to update or create a GeneratedDocument.
     * @example
     * // Update or create a GeneratedDocument
     * const generatedDocument = await prisma.generatedDocument.upsert({
     *   create: {
     *     // ... data to create a GeneratedDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GeneratedDocument we want to update
     *   }
     * })
     */
    upsert<T extends GeneratedDocumentUpsertArgs>(args: SelectSubset<T, GeneratedDocumentUpsertArgs<ExtArgs>>): Prisma__GeneratedDocumentClient<$Result.GetResult<Prisma.$GeneratedDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GeneratedDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedDocumentCountArgs} args - Arguments to filter GeneratedDocuments to count.
     * @example
     * // Count the number of GeneratedDocuments
     * const count = await prisma.generatedDocument.count({
     *   where: {
     *     // ... the filter for the GeneratedDocuments we want to count
     *   }
     * })
    **/
    count<T extends GeneratedDocumentCountArgs>(
      args?: Subset<T, GeneratedDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeneratedDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GeneratedDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GeneratedDocumentAggregateArgs>(args: Subset<T, GeneratedDocumentAggregateArgs>): Prisma.PrismaPromise<GetGeneratedDocumentAggregateType<T>>

    /**
     * Group by GeneratedDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedDocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GeneratedDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GeneratedDocumentGroupByArgs['orderBy'] }
        : { orderBy?: GeneratedDocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GeneratedDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneratedDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GeneratedDocument model
   */
  readonly fields: GeneratedDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GeneratedDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GeneratedDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    job<T extends JobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobDefaultArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    template<T extends DocumentTemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentTemplateDefaultArgs<ExtArgs>>): Prisma__DocumentTemplateClient<$Result.GetResult<Prisma.$DocumentTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GeneratedDocument model
   */
  interface GeneratedDocumentFieldRefs {
    readonly id: FieldRef<"GeneratedDocument", 'String'>
    readonly jobId: FieldRef<"GeneratedDocument", 'String'>
    readonly templateId: FieldRef<"GeneratedDocument", 'String'>
    readonly fileUrl: FieldRef<"GeneratedDocument", 'String'>
    readonly createdAt: FieldRef<"GeneratedDocument", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GeneratedDocument findUnique
   */
  export type GeneratedDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedDocument
     */
    select?: GeneratedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedDocument
     */
    omit?: GeneratedDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedDocumentInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedDocument to fetch.
     */
    where: GeneratedDocumentWhereUniqueInput
  }

  /**
   * GeneratedDocument findUniqueOrThrow
   */
  export type GeneratedDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedDocument
     */
    select?: GeneratedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedDocument
     */
    omit?: GeneratedDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedDocumentInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedDocument to fetch.
     */
    where: GeneratedDocumentWhereUniqueInput
  }

  /**
   * GeneratedDocument findFirst
   */
  export type GeneratedDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedDocument
     */
    select?: GeneratedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedDocument
     */
    omit?: GeneratedDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedDocumentInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedDocument to fetch.
     */
    where?: GeneratedDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedDocuments to fetch.
     */
    orderBy?: GeneratedDocumentOrderByWithRelationInput | GeneratedDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneratedDocuments.
     */
    cursor?: GeneratedDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneratedDocuments.
     */
    distinct?: GeneratedDocumentScalarFieldEnum | GeneratedDocumentScalarFieldEnum[]
  }

  /**
   * GeneratedDocument findFirstOrThrow
   */
  export type GeneratedDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedDocument
     */
    select?: GeneratedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedDocument
     */
    omit?: GeneratedDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedDocumentInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedDocument to fetch.
     */
    where?: GeneratedDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedDocuments to fetch.
     */
    orderBy?: GeneratedDocumentOrderByWithRelationInput | GeneratedDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneratedDocuments.
     */
    cursor?: GeneratedDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneratedDocuments.
     */
    distinct?: GeneratedDocumentScalarFieldEnum | GeneratedDocumentScalarFieldEnum[]
  }

  /**
   * GeneratedDocument findMany
   */
  export type GeneratedDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedDocument
     */
    select?: GeneratedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedDocument
     */
    omit?: GeneratedDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedDocumentInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedDocuments to fetch.
     */
    where?: GeneratedDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedDocuments to fetch.
     */
    orderBy?: GeneratedDocumentOrderByWithRelationInput | GeneratedDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GeneratedDocuments.
     */
    cursor?: GeneratedDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedDocuments.
     */
    skip?: number
    distinct?: GeneratedDocumentScalarFieldEnum | GeneratedDocumentScalarFieldEnum[]
  }

  /**
   * GeneratedDocument create
   */
  export type GeneratedDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedDocument
     */
    select?: GeneratedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedDocument
     */
    omit?: GeneratedDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a GeneratedDocument.
     */
    data: XOR<GeneratedDocumentCreateInput, GeneratedDocumentUncheckedCreateInput>
  }

  /**
   * GeneratedDocument createMany
   */
  export type GeneratedDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GeneratedDocuments.
     */
    data: GeneratedDocumentCreateManyInput | GeneratedDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GeneratedDocument createManyAndReturn
   */
  export type GeneratedDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedDocument
     */
    select?: GeneratedDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedDocument
     */
    omit?: GeneratedDocumentOmit<ExtArgs> | null
    /**
     * The data used to create many GeneratedDocuments.
     */
    data: GeneratedDocumentCreateManyInput | GeneratedDocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedDocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GeneratedDocument update
   */
  export type GeneratedDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedDocument
     */
    select?: GeneratedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedDocument
     */
    omit?: GeneratedDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a GeneratedDocument.
     */
    data: XOR<GeneratedDocumentUpdateInput, GeneratedDocumentUncheckedUpdateInput>
    /**
     * Choose, which GeneratedDocument to update.
     */
    where: GeneratedDocumentWhereUniqueInput
  }

  /**
   * GeneratedDocument updateMany
   */
  export type GeneratedDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GeneratedDocuments.
     */
    data: XOR<GeneratedDocumentUpdateManyMutationInput, GeneratedDocumentUncheckedUpdateManyInput>
    /**
     * Filter which GeneratedDocuments to update
     */
    where?: GeneratedDocumentWhereInput
    /**
     * Limit how many GeneratedDocuments to update.
     */
    limit?: number
  }

  /**
   * GeneratedDocument updateManyAndReturn
   */
  export type GeneratedDocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedDocument
     */
    select?: GeneratedDocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedDocument
     */
    omit?: GeneratedDocumentOmit<ExtArgs> | null
    /**
     * The data used to update GeneratedDocuments.
     */
    data: XOR<GeneratedDocumentUpdateManyMutationInput, GeneratedDocumentUncheckedUpdateManyInput>
    /**
     * Filter which GeneratedDocuments to update
     */
    where?: GeneratedDocumentWhereInput
    /**
     * Limit how many GeneratedDocuments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedDocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GeneratedDocument upsert
   */
  export type GeneratedDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedDocument
     */
    select?: GeneratedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedDocument
     */
    omit?: GeneratedDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the GeneratedDocument to update in case it exists.
     */
    where: GeneratedDocumentWhereUniqueInput
    /**
     * In case the GeneratedDocument found by the `where` argument doesn't exist, create a new GeneratedDocument with this data.
     */
    create: XOR<GeneratedDocumentCreateInput, GeneratedDocumentUncheckedCreateInput>
    /**
     * In case the GeneratedDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GeneratedDocumentUpdateInput, GeneratedDocumentUncheckedUpdateInput>
  }

  /**
   * GeneratedDocument delete
   */
  export type GeneratedDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedDocument
     */
    select?: GeneratedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedDocument
     */
    omit?: GeneratedDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedDocumentInclude<ExtArgs> | null
    /**
     * Filter which GeneratedDocument to delete.
     */
    where: GeneratedDocumentWhereUniqueInput
  }

  /**
   * GeneratedDocument deleteMany
   */
  export type GeneratedDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeneratedDocuments to delete
     */
    where?: GeneratedDocumentWhereInput
    /**
     * Limit how many GeneratedDocuments to delete.
     */
    limit?: number
  }

  /**
   * GeneratedDocument without action
   */
  export type GeneratedDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedDocument
     */
    select?: GeneratedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedDocument
     */
    omit?: GeneratedDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedDocumentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SurveyorProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    companyName: 'companyName',
    addressLine1: 'addressLine1',
    addressLine2: 'addressLine2',
    city: 'city',
    postcode: 'postcode',
    phone: 'phone',
    website: 'website'
  };

  export type SurveyorProfileScalarFieldEnum = (typeof SurveyorProfileScalarFieldEnum)[keyof typeof SurveyorProfileScalarFieldEnum]


  export const JobScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    reference: 'reference',
    description: 'description',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type JobScalarFieldEnum = (typeof JobScalarFieldEnum)[keyof typeof JobScalarFieldEnum]


  export const AdjoiningPropertyScalarFieldEnum: {
    id: 'id',
    jobId: 'jobId',
    addressLine1: 'addressLine1',
    addressLine2: 'addressLine2',
    postcode: 'postcode',
    createdAt: 'createdAt'
  };

  export type AdjoiningPropertyScalarFieldEnum = (typeof AdjoiningPropertyScalarFieldEnum)[keyof typeof AdjoiningPropertyScalarFieldEnum]


  export const OwnerScalarFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    fullName: 'fullName',
    email: 'email',
    phone: 'phone',
    ownershipType: 'ownershipType',
    createdAt: 'createdAt'
  };

  export type OwnerScalarFieldEnum = (typeof OwnerScalarFieldEnum)[keyof typeof OwnerScalarFieldEnum]


  export const DocumentTemplateScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    description: 'description',
    fileUrl: 'fileUrl',
    tagsUsed: 'tagsUsed',
    createdAt: 'createdAt'
  };

  export type DocumentTemplateScalarFieldEnum = (typeof DocumentTemplateScalarFieldEnum)[keyof typeof DocumentTemplateScalarFieldEnum]


  export const GeneratedDocumentScalarFieldEnum: {
    id: 'id',
    jobId: 'jobId',
    templateId: 'templateId',
    fileUrl: 'fileUrl',
    createdAt: 'createdAt'
  };

  export type GeneratedDocumentScalarFieldEnum = (typeof GeneratedDocumentScalarFieldEnum)[keyof typeof GeneratedDocumentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'JobStatus'
   */
  export type EnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus'>
    


  /**
   * Reference to a field of type 'JobStatus[]'
   */
  export type ListEnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus[]'>
    


  /**
   * Reference to a field of type 'OwnershipType'
   */
  export type EnumOwnershipTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OwnershipType'>
    


  /**
   * Reference to a field of type 'OwnershipType[]'
   */
  export type ListEnumOwnershipTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OwnershipType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    jobs?: JobListRelationFilter
    templates?: DocumentTemplateListRelationFilter
    profile?: XOR<SurveyorProfileNullableScalarRelationFilter, SurveyorProfileWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    jobs?: JobOrderByRelationAggregateInput
    templates?: DocumentTemplateOrderByRelationAggregateInput
    profile?: SurveyorProfileOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    jobs?: JobListRelationFilter
    templates?: DocumentTemplateListRelationFilter
    profile?: XOR<SurveyorProfileNullableScalarRelationFilter, SurveyorProfileWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SurveyorProfileWhereInput = {
    AND?: SurveyorProfileWhereInput | SurveyorProfileWhereInput[]
    OR?: SurveyorProfileWhereInput[]
    NOT?: SurveyorProfileWhereInput | SurveyorProfileWhereInput[]
    id?: StringFilter<"SurveyorProfile"> | string
    userId?: StringFilter<"SurveyorProfile"> | string
    companyName?: StringFilter<"SurveyorProfile"> | string
    addressLine1?: StringFilter<"SurveyorProfile"> | string
    addressLine2?: StringNullableFilter<"SurveyorProfile"> | string | null
    city?: StringFilter<"SurveyorProfile"> | string
    postcode?: StringFilter<"SurveyorProfile"> | string
    phone?: StringFilter<"SurveyorProfile"> | string
    website?: StringNullableFilter<"SurveyorProfile"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SurveyorProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrderInput | SortOrder
    city?: SortOrder
    postcode?: SortOrder
    phone?: SortOrder
    website?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SurveyorProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: SurveyorProfileWhereInput | SurveyorProfileWhereInput[]
    OR?: SurveyorProfileWhereInput[]
    NOT?: SurveyorProfileWhereInput | SurveyorProfileWhereInput[]
    companyName?: StringFilter<"SurveyorProfile"> | string
    addressLine1?: StringFilter<"SurveyorProfile"> | string
    addressLine2?: StringNullableFilter<"SurveyorProfile"> | string | null
    city?: StringFilter<"SurveyorProfile"> | string
    postcode?: StringFilter<"SurveyorProfile"> | string
    phone?: StringFilter<"SurveyorProfile"> | string
    website?: StringNullableFilter<"SurveyorProfile"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type SurveyorProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrderInput | SortOrder
    city?: SortOrder
    postcode?: SortOrder
    phone?: SortOrder
    website?: SortOrderInput | SortOrder
    _count?: SurveyorProfileCountOrderByAggregateInput
    _max?: SurveyorProfileMaxOrderByAggregateInput
    _min?: SurveyorProfileMinOrderByAggregateInput
  }

  export type SurveyorProfileScalarWhereWithAggregatesInput = {
    AND?: SurveyorProfileScalarWhereWithAggregatesInput | SurveyorProfileScalarWhereWithAggregatesInput[]
    OR?: SurveyorProfileScalarWhereWithAggregatesInput[]
    NOT?: SurveyorProfileScalarWhereWithAggregatesInput | SurveyorProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SurveyorProfile"> | string
    userId?: StringWithAggregatesFilter<"SurveyorProfile"> | string
    companyName?: StringWithAggregatesFilter<"SurveyorProfile"> | string
    addressLine1?: StringWithAggregatesFilter<"SurveyorProfile"> | string
    addressLine2?: StringNullableWithAggregatesFilter<"SurveyorProfile"> | string | null
    city?: StringWithAggregatesFilter<"SurveyorProfile"> | string
    postcode?: StringWithAggregatesFilter<"SurveyorProfile"> | string
    phone?: StringWithAggregatesFilter<"SurveyorProfile"> | string
    website?: StringNullableWithAggregatesFilter<"SurveyorProfile"> | string | null
  }

  export type JobWhereInput = {
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    id?: StringFilter<"Job"> | string
    userId?: StringFilter<"Job"> | string
    title?: StringFilter<"Job"> | string
    reference?: StringNullableFilter<"Job"> | string | null
    description?: StringNullableFilter<"Job"> | string | null
    status?: EnumJobStatusFilter<"Job"> | $Enums.JobStatus
    createdAt?: DateTimeFilter<"Job"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    properties?: AdjoiningPropertyListRelationFilter
    generatedDocs?: GeneratedDocumentListRelationFilter
  }

  export type JobOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    reference?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    properties?: AdjoiningPropertyOrderByRelationAggregateInput
    generatedDocs?: GeneratedDocumentOrderByRelationAggregateInput
  }

  export type JobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    userId?: StringFilter<"Job"> | string
    title?: StringFilter<"Job"> | string
    reference?: StringNullableFilter<"Job"> | string | null
    description?: StringNullableFilter<"Job"> | string | null
    status?: EnumJobStatusFilter<"Job"> | $Enums.JobStatus
    createdAt?: DateTimeFilter<"Job"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    properties?: AdjoiningPropertyListRelationFilter
    generatedDocs?: GeneratedDocumentListRelationFilter
  }, "id">

  export type JobOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    reference?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: JobCountOrderByAggregateInput
    _max?: JobMaxOrderByAggregateInput
    _min?: JobMinOrderByAggregateInput
  }

  export type JobScalarWhereWithAggregatesInput = {
    AND?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    OR?: JobScalarWhereWithAggregatesInput[]
    NOT?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Job"> | string
    userId?: StringWithAggregatesFilter<"Job"> | string
    title?: StringWithAggregatesFilter<"Job"> | string
    reference?: StringNullableWithAggregatesFilter<"Job"> | string | null
    description?: StringNullableWithAggregatesFilter<"Job"> | string | null
    status?: EnumJobStatusWithAggregatesFilter<"Job"> | $Enums.JobStatus
    createdAt?: DateTimeWithAggregatesFilter<"Job"> | Date | string
  }

  export type AdjoiningPropertyWhereInput = {
    AND?: AdjoiningPropertyWhereInput | AdjoiningPropertyWhereInput[]
    OR?: AdjoiningPropertyWhereInput[]
    NOT?: AdjoiningPropertyWhereInput | AdjoiningPropertyWhereInput[]
    id?: StringFilter<"AdjoiningProperty"> | string
    jobId?: StringFilter<"AdjoiningProperty"> | string
    addressLine1?: StringFilter<"AdjoiningProperty"> | string
    addressLine2?: StringNullableFilter<"AdjoiningProperty"> | string | null
    postcode?: StringFilter<"AdjoiningProperty"> | string
    createdAt?: DateTimeFilter<"AdjoiningProperty"> | Date | string
    job?: XOR<JobScalarRelationFilter, JobWhereInput>
    owners?: OwnerListRelationFilter
  }

  export type AdjoiningPropertyOrderByWithRelationInput = {
    id?: SortOrder
    jobId?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrderInput | SortOrder
    postcode?: SortOrder
    createdAt?: SortOrder
    job?: JobOrderByWithRelationInput
    owners?: OwnerOrderByRelationAggregateInput
  }

  export type AdjoiningPropertyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AdjoiningPropertyWhereInput | AdjoiningPropertyWhereInput[]
    OR?: AdjoiningPropertyWhereInput[]
    NOT?: AdjoiningPropertyWhereInput | AdjoiningPropertyWhereInput[]
    jobId?: StringFilter<"AdjoiningProperty"> | string
    addressLine1?: StringFilter<"AdjoiningProperty"> | string
    addressLine2?: StringNullableFilter<"AdjoiningProperty"> | string | null
    postcode?: StringFilter<"AdjoiningProperty"> | string
    createdAt?: DateTimeFilter<"AdjoiningProperty"> | Date | string
    job?: XOR<JobScalarRelationFilter, JobWhereInput>
    owners?: OwnerListRelationFilter
  }, "id">

  export type AdjoiningPropertyOrderByWithAggregationInput = {
    id?: SortOrder
    jobId?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrderInput | SortOrder
    postcode?: SortOrder
    createdAt?: SortOrder
    _count?: AdjoiningPropertyCountOrderByAggregateInput
    _max?: AdjoiningPropertyMaxOrderByAggregateInput
    _min?: AdjoiningPropertyMinOrderByAggregateInput
  }

  export type AdjoiningPropertyScalarWhereWithAggregatesInput = {
    AND?: AdjoiningPropertyScalarWhereWithAggregatesInput | AdjoiningPropertyScalarWhereWithAggregatesInput[]
    OR?: AdjoiningPropertyScalarWhereWithAggregatesInput[]
    NOT?: AdjoiningPropertyScalarWhereWithAggregatesInput | AdjoiningPropertyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdjoiningProperty"> | string
    jobId?: StringWithAggregatesFilter<"AdjoiningProperty"> | string
    addressLine1?: StringWithAggregatesFilter<"AdjoiningProperty"> | string
    addressLine2?: StringNullableWithAggregatesFilter<"AdjoiningProperty"> | string | null
    postcode?: StringWithAggregatesFilter<"AdjoiningProperty"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AdjoiningProperty"> | Date | string
  }

  export type OwnerWhereInput = {
    AND?: OwnerWhereInput | OwnerWhereInput[]
    OR?: OwnerWhereInput[]
    NOT?: OwnerWhereInput | OwnerWhereInput[]
    id?: StringFilter<"Owner"> | string
    propertyId?: StringFilter<"Owner"> | string
    fullName?: StringFilter<"Owner"> | string
    email?: StringNullableFilter<"Owner"> | string | null
    phone?: StringNullableFilter<"Owner"> | string | null
    ownershipType?: EnumOwnershipTypeNullableFilter<"Owner"> | $Enums.OwnershipType | null
    createdAt?: DateTimeFilter<"Owner"> | Date | string
    adjoiningProperty?: XOR<AdjoiningPropertyScalarRelationFilter, AdjoiningPropertyWhereInput>
  }

  export type OwnerOrderByWithRelationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    fullName?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    ownershipType?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    adjoiningProperty?: AdjoiningPropertyOrderByWithRelationInput
  }

  export type OwnerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OwnerWhereInput | OwnerWhereInput[]
    OR?: OwnerWhereInput[]
    NOT?: OwnerWhereInput | OwnerWhereInput[]
    propertyId?: StringFilter<"Owner"> | string
    fullName?: StringFilter<"Owner"> | string
    email?: StringNullableFilter<"Owner"> | string | null
    phone?: StringNullableFilter<"Owner"> | string | null
    ownershipType?: EnumOwnershipTypeNullableFilter<"Owner"> | $Enums.OwnershipType | null
    createdAt?: DateTimeFilter<"Owner"> | Date | string
    adjoiningProperty?: XOR<AdjoiningPropertyScalarRelationFilter, AdjoiningPropertyWhereInput>
  }, "id">

  export type OwnerOrderByWithAggregationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    fullName?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    ownershipType?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: OwnerCountOrderByAggregateInput
    _max?: OwnerMaxOrderByAggregateInput
    _min?: OwnerMinOrderByAggregateInput
  }

  export type OwnerScalarWhereWithAggregatesInput = {
    AND?: OwnerScalarWhereWithAggregatesInput | OwnerScalarWhereWithAggregatesInput[]
    OR?: OwnerScalarWhereWithAggregatesInput[]
    NOT?: OwnerScalarWhereWithAggregatesInput | OwnerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Owner"> | string
    propertyId?: StringWithAggregatesFilter<"Owner"> | string
    fullName?: StringWithAggregatesFilter<"Owner"> | string
    email?: StringNullableWithAggregatesFilter<"Owner"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Owner"> | string | null
    ownershipType?: EnumOwnershipTypeNullableWithAggregatesFilter<"Owner"> | $Enums.OwnershipType | null
    createdAt?: DateTimeWithAggregatesFilter<"Owner"> | Date | string
  }

  export type DocumentTemplateWhereInput = {
    AND?: DocumentTemplateWhereInput | DocumentTemplateWhereInput[]
    OR?: DocumentTemplateWhereInput[]
    NOT?: DocumentTemplateWhereInput | DocumentTemplateWhereInput[]
    id?: StringFilter<"DocumentTemplate"> | string
    userId?: StringFilter<"DocumentTemplate"> | string
    name?: StringFilter<"DocumentTemplate"> | string
    description?: StringNullableFilter<"DocumentTemplate"> | string | null
    fileUrl?: StringFilter<"DocumentTemplate"> | string
    tagsUsed?: StringNullableListFilter<"DocumentTemplate">
    createdAt?: DateTimeFilter<"DocumentTemplate"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    generatedDocs?: GeneratedDocumentListRelationFilter
  }

  export type DocumentTemplateOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    fileUrl?: SortOrder
    tagsUsed?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    generatedDocs?: GeneratedDocumentOrderByRelationAggregateInput
  }

  export type DocumentTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentTemplateWhereInput | DocumentTemplateWhereInput[]
    OR?: DocumentTemplateWhereInput[]
    NOT?: DocumentTemplateWhereInput | DocumentTemplateWhereInput[]
    userId?: StringFilter<"DocumentTemplate"> | string
    name?: StringFilter<"DocumentTemplate"> | string
    description?: StringNullableFilter<"DocumentTemplate"> | string | null
    fileUrl?: StringFilter<"DocumentTemplate"> | string
    tagsUsed?: StringNullableListFilter<"DocumentTemplate">
    createdAt?: DateTimeFilter<"DocumentTemplate"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    generatedDocs?: GeneratedDocumentListRelationFilter
  }, "id">

  export type DocumentTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    fileUrl?: SortOrder
    tagsUsed?: SortOrder
    createdAt?: SortOrder
    _count?: DocumentTemplateCountOrderByAggregateInput
    _max?: DocumentTemplateMaxOrderByAggregateInput
    _min?: DocumentTemplateMinOrderByAggregateInput
  }

  export type DocumentTemplateScalarWhereWithAggregatesInput = {
    AND?: DocumentTemplateScalarWhereWithAggregatesInput | DocumentTemplateScalarWhereWithAggregatesInput[]
    OR?: DocumentTemplateScalarWhereWithAggregatesInput[]
    NOT?: DocumentTemplateScalarWhereWithAggregatesInput | DocumentTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DocumentTemplate"> | string
    userId?: StringWithAggregatesFilter<"DocumentTemplate"> | string
    name?: StringWithAggregatesFilter<"DocumentTemplate"> | string
    description?: StringNullableWithAggregatesFilter<"DocumentTemplate"> | string | null
    fileUrl?: StringWithAggregatesFilter<"DocumentTemplate"> | string
    tagsUsed?: StringNullableListFilter<"DocumentTemplate">
    createdAt?: DateTimeWithAggregatesFilter<"DocumentTemplate"> | Date | string
  }

  export type GeneratedDocumentWhereInput = {
    AND?: GeneratedDocumentWhereInput | GeneratedDocumentWhereInput[]
    OR?: GeneratedDocumentWhereInput[]
    NOT?: GeneratedDocumentWhereInput | GeneratedDocumentWhereInput[]
    id?: StringFilter<"GeneratedDocument"> | string
    jobId?: StringFilter<"GeneratedDocument"> | string
    templateId?: StringFilter<"GeneratedDocument"> | string
    fileUrl?: StringFilter<"GeneratedDocument"> | string
    createdAt?: DateTimeFilter<"GeneratedDocument"> | Date | string
    job?: XOR<JobScalarRelationFilter, JobWhereInput>
    template?: XOR<DocumentTemplateScalarRelationFilter, DocumentTemplateWhereInput>
  }

  export type GeneratedDocumentOrderByWithRelationInput = {
    id?: SortOrder
    jobId?: SortOrder
    templateId?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
    job?: JobOrderByWithRelationInput
    template?: DocumentTemplateOrderByWithRelationInput
  }

  export type GeneratedDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GeneratedDocumentWhereInput | GeneratedDocumentWhereInput[]
    OR?: GeneratedDocumentWhereInput[]
    NOT?: GeneratedDocumentWhereInput | GeneratedDocumentWhereInput[]
    jobId?: StringFilter<"GeneratedDocument"> | string
    templateId?: StringFilter<"GeneratedDocument"> | string
    fileUrl?: StringFilter<"GeneratedDocument"> | string
    createdAt?: DateTimeFilter<"GeneratedDocument"> | Date | string
    job?: XOR<JobScalarRelationFilter, JobWhereInput>
    template?: XOR<DocumentTemplateScalarRelationFilter, DocumentTemplateWhereInput>
  }, "id">

  export type GeneratedDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    jobId?: SortOrder
    templateId?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
    _count?: GeneratedDocumentCountOrderByAggregateInput
    _max?: GeneratedDocumentMaxOrderByAggregateInput
    _min?: GeneratedDocumentMinOrderByAggregateInput
  }

  export type GeneratedDocumentScalarWhereWithAggregatesInput = {
    AND?: GeneratedDocumentScalarWhereWithAggregatesInput | GeneratedDocumentScalarWhereWithAggregatesInput[]
    OR?: GeneratedDocumentScalarWhereWithAggregatesInput[]
    NOT?: GeneratedDocumentScalarWhereWithAggregatesInput | GeneratedDocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GeneratedDocument"> | string
    jobId?: StringWithAggregatesFilter<"GeneratedDocument"> | string
    templateId?: StringWithAggregatesFilter<"GeneratedDocument"> | string
    fileUrl?: StringWithAggregatesFilter<"GeneratedDocument"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GeneratedDocument"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    jobs?: JobCreateNestedManyWithoutUserInput
    templates?: DocumentTemplateCreateNestedManyWithoutUserInput
    profile?: SurveyorProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    jobs?: JobUncheckedCreateNestedManyWithoutUserInput
    templates?: DocumentTemplateUncheckedCreateNestedManyWithoutUserInput
    profile?: SurveyorProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobUpdateManyWithoutUserNestedInput
    templates?: DocumentTemplateUpdateManyWithoutUserNestedInput
    profile?: SurveyorProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobUncheckedUpdateManyWithoutUserNestedInput
    templates?: DocumentTemplateUncheckedUpdateManyWithoutUserNestedInput
    profile?: SurveyorProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurveyorProfileCreateInput = {
    id?: string
    companyName: string
    addressLine1: string
    addressLine2?: string | null
    city: string
    postcode: string
    phone: string
    website?: string | null
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type SurveyorProfileUncheckedCreateInput = {
    id?: string
    userId: string
    companyName: string
    addressLine1: string
    addressLine2?: string | null
    city: string
    postcode: string
    phone: string
    website?: string | null
  }

  export type SurveyorProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type SurveyorProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SurveyorProfileCreateManyInput = {
    id?: string
    userId: string
    companyName: string
    addressLine1: string
    addressLine2?: string | null
    city: string
    postcode: string
    phone: string
    website?: string | null
  }

  export type SurveyorProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SurveyorProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JobCreateInput = {
    id?: string
    title: string
    reference?: string | null
    description?: string | null
    status?: $Enums.JobStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutJobsInput
    properties?: AdjoiningPropertyCreateNestedManyWithoutJobInput
    generatedDocs?: GeneratedDocumentCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    reference?: string | null
    description?: string | null
    status?: $Enums.JobStatus
    createdAt?: Date | string
    properties?: AdjoiningPropertyUncheckedCreateNestedManyWithoutJobInput
    generatedDocs?: GeneratedDocumentUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutJobsNestedInput
    properties?: AdjoiningPropertyUpdateManyWithoutJobNestedInput
    generatedDocs?: GeneratedDocumentUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: AdjoiningPropertyUncheckedUpdateManyWithoutJobNestedInput
    generatedDocs?: GeneratedDocumentUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobCreateManyInput = {
    id?: string
    userId: string
    title: string
    reference?: string | null
    description?: string | null
    status?: $Enums.JobStatus
    createdAt?: Date | string
  }

  export type JobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdjoiningPropertyCreateInput = {
    id?: string
    addressLine1: string
    addressLine2?: string | null
    postcode: string
    createdAt?: Date | string
    job: JobCreateNestedOneWithoutPropertiesInput
    owners?: OwnerCreateNestedManyWithoutAdjoiningPropertyInput
  }

  export type AdjoiningPropertyUncheckedCreateInput = {
    id?: string
    jobId: string
    addressLine1: string
    addressLine2?: string | null
    postcode: string
    createdAt?: Date | string
    owners?: OwnerUncheckedCreateNestedManyWithoutAdjoiningPropertyInput
  }

  export type AdjoiningPropertyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobUpdateOneRequiredWithoutPropertiesNestedInput
    owners?: OwnerUpdateManyWithoutAdjoiningPropertyNestedInput
  }

  export type AdjoiningPropertyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owners?: OwnerUncheckedUpdateManyWithoutAdjoiningPropertyNestedInput
  }

  export type AdjoiningPropertyCreateManyInput = {
    id?: string
    jobId: string
    addressLine1: string
    addressLine2?: string | null
    postcode: string
    createdAt?: Date | string
  }

  export type AdjoiningPropertyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdjoiningPropertyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OwnerCreateInput = {
    id?: string
    fullName: string
    email?: string | null
    phone?: string | null
    ownershipType?: $Enums.OwnershipType | null
    createdAt?: Date | string
    adjoiningProperty: AdjoiningPropertyCreateNestedOneWithoutOwnersInput
  }

  export type OwnerUncheckedCreateInput = {
    id?: string
    propertyId: string
    fullName: string
    email?: string | null
    phone?: string | null
    ownershipType?: $Enums.OwnershipType | null
    createdAt?: Date | string
  }

  export type OwnerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    ownershipType?: NullableEnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adjoiningProperty?: AdjoiningPropertyUpdateOneRequiredWithoutOwnersNestedInput
  }

  export type OwnerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    ownershipType?: NullableEnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OwnerCreateManyInput = {
    id?: string
    propertyId: string
    fullName: string
    email?: string | null
    phone?: string | null
    ownershipType?: $Enums.OwnershipType | null
    createdAt?: Date | string
  }

  export type OwnerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    ownershipType?: NullableEnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OwnerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    ownershipType?: NullableEnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentTemplateCreateInput = {
    id?: string
    name: string
    description?: string | null
    fileUrl: string
    tagsUsed?: DocumentTemplateCreatetagsUsedInput | string[]
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTemplatesInput
    generatedDocs?: GeneratedDocumentCreateNestedManyWithoutTemplateInput
  }

  export type DocumentTemplateUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    fileUrl: string
    tagsUsed?: DocumentTemplateCreatetagsUsedInput | string[]
    createdAt?: Date | string
    generatedDocs?: GeneratedDocumentUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type DocumentTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    tagsUsed?: DocumentTemplateUpdatetagsUsedInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTemplatesNestedInput
    generatedDocs?: GeneratedDocumentUpdateManyWithoutTemplateNestedInput
  }

  export type DocumentTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    tagsUsed?: DocumentTemplateUpdatetagsUsedInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generatedDocs?: GeneratedDocumentUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type DocumentTemplateCreateManyInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    fileUrl: string
    tagsUsed?: DocumentTemplateCreatetagsUsedInput | string[]
    createdAt?: Date | string
  }

  export type DocumentTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    tagsUsed?: DocumentTemplateUpdatetagsUsedInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    tagsUsed?: DocumentTemplateUpdatetagsUsedInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratedDocumentCreateInput = {
    id?: string
    fileUrl: string
    createdAt?: Date | string
    job: JobCreateNestedOneWithoutGeneratedDocsInput
    template: DocumentTemplateCreateNestedOneWithoutGeneratedDocsInput
  }

  export type GeneratedDocumentUncheckedCreateInput = {
    id?: string
    jobId: string
    templateId: string
    fileUrl: string
    createdAt?: Date | string
  }

  export type GeneratedDocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobUpdateOneRequiredWithoutGeneratedDocsNestedInput
    template?: DocumentTemplateUpdateOneRequiredWithoutGeneratedDocsNestedInput
  }

  export type GeneratedDocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratedDocumentCreateManyInput = {
    id?: string
    jobId: string
    templateId: string
    fileUrl: string
    createdAt?: Date | string
  }

  export type GeneratedDocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratedDocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type JobListRelationFilter = {
    every?: JobWhereInput
    some?: JobWhereInput
    none?: JobWhereInput
  }

  export type DocumentTemplateListRelationFilter = {
    every?: DocumentTemplateWhereInput
    some?: DocumentTemplateWhereInput
    none?: DocumentTemplateWhereInput
  }

  export type SurveyorProfileNullableScalarRelationFilter = {
    is?: SurveyorProfileWhereInput | null
    isNot?: SurveyorProfileWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type JobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentTemplateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SurveyorProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrder
    city?: SortOrder
    postcode?: SortOrder
    phone?: SortOrder
    website?: SortOrder
  }

  export type SurveyorProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrder
    city?: SortOrder
    postcode?: SortOrder
    phone?: SortOrder
    website?: SortOrder
  }

  export type SurveyorProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrder
    city?: SortOrder
    postcode?: SortOrder
    phone?: SortOrder
    website?: SortOrder
  }

  export type EnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
  }

  export type AdjoiningPropertyListRelationFilter = {
    every?: AdjoiningPropertyWhereInput
    some?: AdjoiningPropertyWhereInput
    none?: AdjoiningPropertyWhereInput
  }

  export type GeneratedDocumentListRelationFilter = {
    every?: GeneratedDocumentWhereInput
    some?: GeneratedDocumentWhereInput
    none?: GeneratedDocumentWhereInput
  }

  export type AdjoiningPropertyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GeneratedDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    reference?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type JobMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    reference?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type JobMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    reference?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type JobScalarRelationFilter = {
    is?: JobWhereInput
    isNot?: JobWhereInput
  }

  export type OwnerListRelationFilter = {
    every?: OwnerWhereInput
    some?: OwnerWhereInput
    none?: OwnerWhereInput
  }

  export type OwnerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdjoiningPropertyCountOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrder
    postcode?: SortOrder
    createdAt?: SortOrder
  }

  export type AdjoiningPropertyMaxOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrder
    postcode?: SortOrder
    createdAt?: SortOrder
  }

  export type AdjoiningPropertyMinOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrder
    postcode?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumOwnershipTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.OwnershipType | EnumOwnershipTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.OwnershipType[] | ListEnumOwnershipTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.OwnershipType[] | ListEnumOwnershipTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumOwnershipTypeNullableFilter<$PrismaModel> | $Enums.OwnershipType | null
  }

  export type AdjoiningPropertyScalarRelationFilter = {
    is?: AdjoiningPropertyWhereInput
    isNot?: AdjoiningPropertyWhereInput
  }

  export type OwnerCountOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    ownershipType?: SortOrder
    createdAt?: SortOrder
  }

  export type OwnerMaxOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    ownershipType?: SortOrder
    createdAt?: SortOrder
  }

  export type OwnerMinOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    ownershipType?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumOwnershipTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OwnershipType | EnumOwnershipTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.OwnershipType[] | ListEnumOwnershipTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.OwnershipType[] | ListEnumOwnershipTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumOwnershipTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.OwnershipType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumOwnershipTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumOwnershipTypeNullableFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DocumentTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    fileUrl?: SortOrder
    tagsUsed?: SortOrder
    createdAt?: SortOrder
  }

  export type DocumentTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type DocumentTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type DocumentTemplateScalarRelationFilter = {
    is?: DocumentTemplateWhereInput
    isNot?: DocumentTemplateWhereInput
  }

  export type GeneratedDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    templateId?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type GeneratedDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    templateId?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type GeneratedDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    templateId?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type JobCreateNestedManyWithoutUserInput = {
    create?: XOR<JobCreateWithoutUserInput, JobUncheckedCreateWithoutUserInput> | JobCreateWithoutUserInput[] | JobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JobCreateOrConnectWithoutUserInput | JobCreateOrConnectWithoutUserInput[]
    createMany?: JobCreateManyUserInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type DocumentTemplateCreateNestedManyWithoutUserInput = {
    create?: XOR<DocumentTemplateCreateWithoutUserInput, DocumentTemplateUncheckedCreateWithoutUserInput> | DocumentTemplateCreateWithoutUserInput[] | DocumentTemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentTemplateCreateOrConnectWithoutUserInput | DocumentTemplateCreateOrConnectWithoutUserInput[]
    createMany?: DocumentTemplateCreateManyUserInputEnvelope
    connect?: DocumentTemplateWhereUniqueInput | DocumentTemplateWhereUniqueInput[]
  }

  export type SurveyorProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<SurveyorProfileCreateWithoutUserInput, SurveyorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: SurveyorProfileCreateOrConnectWithoutUserInput
    connect?: SurveyorProfileWhereUniqueInput
  }

  export type JobUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<JobCreateWithoutUserInput, JobUncheckedCreateWithoutUserInput> | JobCreateWithoutUserInput[] | JobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JobCreateOrConnectWithoutUserInput | JobCreateOrConnectWithoutUserInput[]
    createMany?: JobCreateManyUserInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type DocumentTemplateUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DocumentTemplateCreateWithoutUserInput, DocumentTemplateUncheckedCreateWithoutUserInput> | DocumentTemplateCreateWithoutUserInput[] | DocumentTemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentTemplateCreateOrConnectWithoutUserInput | DocumentTemplateCreateOrConnectWithoutUserInput[]
    createMany?: DocumentTemplateCreateManyUserInputEnvelope
    connect?: DocumentTemplateWhereUniqueInput | DocumentTemplateWhereUniqueInput[]
  }

  export type SurveyorProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SurveyorProfileCreateWithoutUserInput, SurveyorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: SurveyorProfileCreateOrConnectWithoutUserInput
    connect?: SurveyorProfileWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type JobUpdateManyWithoutUserNestedInput = {
    create?: XOR<JobCreateWithoutUserInput, JobUncheckedCreateWithoutUserInput> | JobCreateWithoutUserInput[] | JobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JobCreateOrConnectWithoutUserInput | JobCreateOrConnectWithoutUserInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutUserInput | JobUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JobCreateManyUserInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutUserInput | JobUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JobUpdateManyWithWhereWithoutUserInput | JobUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type DocumentTemplateUpdateManyWithoutUserNestedInput = {
    create?: XOR<DocumentTemplateCreateWithoutUserInput, DocumentTemplateUncheckedCreateWithoutUserInput> | DocumentTemplateCreateWithoutUserInput[] | DocumentTemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentTemplateCreateOrConnectWithoutUserInput | DocumentTemplateCreateOrConnectWithoutUserInput[]
    upsert?: DocumentTemplateUpsertWithWhereUniqueWithoutUserInput | DocumentTemplateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DocumentTemplateCreateManyUserInputEnvelope
    set?: DocumentTemplateWhereUniqueInput | DocumentTemplateWhereUniqueInput[]
    disconnect?: DocumentTemplateWhereUniqueInput | DocumentTemplateWhereUniqueInput[]
    delete?: DocumentTemplateWhereUniqueInput | DocumentTemplateWhereUniqueInput[]
    connect?: DocumentTemplateWhereUniqueInput | DocumentTemplateWhereUniqueInput[]
    update?: DocumentTemplateUpdateWithWhereUniqueWithoutUserInput | DocumentTemplateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DocumentTemplateUpdateManyWithWhereWithoutUserInput | DocumentTemplateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DocumentTemplateScalarWhereInput | DocumentTemplateScalarWhereInput[]
  }

  export type SurveyorProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<SurveyorProfileCreateWithoutUserInput, SurveyorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: SurveyorProfileCreateOrConnectWithoutUserInput
    upsert?: SurveyorProfileUpsertWithoutUserInput
    disconnect?: SurveyorProfileWhereInput | boolean
    delete?: SurveyorProfileWhereInput | boolean
    connect?: SurveyorProfileWhereUniqueInput
    update?: XOR<XOR<SurveyorProfileUpdateToOneWithWhereWithoutUserInput, SurveyorProfileUpdateWithoutUserInput>, SurveyorProfileUncheckedUpdateWithoutUserInput>
  }

  export type JobUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<JobCreateWithoutUserInput, JobUncheckedCreateWithoutUserInput> | JobCreateWithoutUserInput[] | JobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JobCreateOrConnectWithoutUserInput | JobCreateOrConnectWithoutUserInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutUserInput | JobUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JobCreateManyUserInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutUserInput | JobUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JobUpdateManyWithWhereWithoutUserInput | JobUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type DocumentTemplateUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DocumentTemplateCreateWithoutUserInput, DocumentTemplateUncheckedCreateWithoutUserInput> | DocumentTemplateCreateWithoutUserInput[] | DocumentTemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentTemplateCreateOrConnectWithoutUserInput | DocumentTemplateCreateOrConnectWithoutUserInput[]
    upsert?: DocumentTemplateUpsertWithWhereUniqueWithoutUserInput | DocumentTemplateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DocumentTemplateCreateManyUserInputEnvelope
    set?: DocumentTemplateWhereUniqueInput | DocumentTemplateWhereUniqueInput[]
    disconnect?: DocumentTemplateWhereUniqueInput | DocumentTemplateWhereUniqueInput[]
    delete?: DocumentTemplateWhereUniqueInput | DocumentTemplateWhereUniqueInput[]
    connect?: DocumentTemplateWhereUniqueInput | DocumentTemplateWhereUniqueInput[]
    update?: DocumentTemplateUpdateWithWhereUniqueWithoutUserInput | DocumentTemplateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DocumentTemplateUpdateManyWithWhereWithoutUserInput | DocumentTemplateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DocumentTemplateScalarWhereInput | DocumentTemplateScalarWhereInput[]
  }

  export type SurveyorProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SurveyorProfileCreateWithoutUserInput, SurveyorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: SurveyorProfileCreateOrConnectWithoutUserInput
    upsert?: SurveyorProfileUpsertWithoutUserInput
    disconnect?: SurveyorProfileWhereInput | boolean
    delete?: SurveyorProfileWhereInput | boolean
    connect?: SurveyorProfileWhereUniqueInput
    update?: XOR<XOR<SurveyorProfileUpdateToOneWithWhereWithoutUserInput, SurveyorProfileUpdateWithoutUserInput>, SurveyorProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserCreateNestedOneWithoutJobsInput = {
    create?: XOR<UserCreateWithoutJobsInput, UserUncheckedCreateWithoutJobsInput>
    connectOrCreate?: UserCreateOrConnectWithoutJobsInput
    connect?: UserWhereUniqueInput
  }

  export type AdjoiningPropertyCreateNestedManyWithoutJobInput = {
    create?: XOR<AdjoiningPropertyCreateWithoutJobInput, AdjoiningPropertyUncheckedCreateWithoutJobInput> | AdjoiningPropertyCreateWithoutJobInput[] | AdjoiningPropertyUncheckedCreateWithoutJobInput[]
    connectOrCreate?: AdjoiningPropertyCreateOrConnectWithoutJobInput | AdjoiningPropertyCreateOrConnectWithoutJobInput[]
    createMany?: AdjoiningPropertyCreateManyJobInputEnvelope
    connect?: AdjoiningPropertyWhereUniqueInput | AdjoiningPropertyWhereUniqueInput[]
  }

  export type GeneratedDocumentCreateNestedManyWithoutJobInput = {
    create?: XOR<GeneratedDocumentCreateWithoutJobInput, GeneratedDocumentUncheckedCreateWithoutJobInput> | GeneratedDocumentCreateWithoutJobInput[] | GeneratedDocumentUncheckedCreateWithoutJobInput[]
    connectOrCreate?: GeneratedDocumentCreateOrConnectWithoutJobInput | GeneratedDocumentCreateOrConnectWithoutJobInput[]
    createMany?: GeneratedDocumentCreateManyJobInputEnvelope
    connect?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
  }

  export type AdjoiningPropertyUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<AdjoiningPropertyCreateWithoutJobInput, AdjoiningPropertyUncheckedCreateWithoutJobInput> | AdjoiningPropertyCreateWithoutJobInput[] | AdjoiningPropertyUncheckedCreateWithoutJobInput[]
    connectOrCreate?: AdjoiningPropertyCreateOrConnectWithoutJobInput | AdjoiningPropertyCreateOrConnectWithoutJobInput[]
    createMany?: AdjoiningPropertyCreateManyJobInputEnvelope
    connect?: AdjoiningPropertyWhereUniqueInput | AdjoiningPropertyWhereUniqueInput[]
  }

  export type GeneratedDocumentUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<GeneratedDocumentCreateWithoutJobInput, GeneratedDocumentUncheckedCreateWithoutJobInput> | GeneratedDocumentCreateWithoutJobInput[] | GeneratedDocumentUncheckedCreateWithoutJobInput[]
    connectOrCreate?: GeneratedDocumentCreateOrConnectWithoutJobInput | GeneratedDocumentCreateOrConnectWithoutJobInput[]
    createMany?: GeneratedDocumentCreateManyJobInputEnvelope
    connect?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
  }

  export type EnumJobStatusFieldUpdateOperationsInput = {
    set?: $Enums.JobStatus
  }

  export type UserUpdateOneRequiredWithoutJobsNestedInput = {
    create?: XOR<UserCreateWithoutJobsInput, UserUncheckedCreateWithoutJobsInput>
    connectOrCreate?: UserCreateOrConnectWithoutJobsInput
    upsert?: UserUpsertWithoutJobsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutJobsInput, UserUpdateWithoutJobsInput>, UserUncheckedUpdateWithoutJobsInput>
  }

  export type AdjoiningPropertyUpdateManyWithoutJobNestedInput = {
    create?: XOR<AdjoiningPropertyCreateWithoutJobInput, AdjoiningPropertyUncheckedCreateWithoutJobInput> | AdjoiningPropertyCreateWithoutJobInput[] | AdjoiningPropertyUncheckedCreateWithoutJobInput[]
    connectOrCreate?: AdjoiningPropertyCreateOrConnectWithoutJobInput | AdjoiningPropertyCreateOrConnectWithoutJobInput[]
    upsert?: AdjoiningPropertyUpsertWithWhereUniqueWithoutJobInput | AdjoiningPropertyUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: AdjoiningPropertyCreateManyJobInputEnvelope
    set?: AdjoiningPropertyWhereUniqueInput | AdjoiningPropertyWhereUniqueInput[]
    disconnect?: AdjoiningPropertyWhereUniqueInput | AdjoiningPropertyWhereUniqueInput[]
    delete?: AdjoiningPropertyWhereUniqueInput | AdjoiningPropertyWhereUniqueInput[]
    connect?: AdjoiningPropertyWhereUniqueInput | AdjoiningPropertyWhereUniqueInput[]
    update?: AdjoiningPropertyUpdateWithWhereUniqueWithoutJobInput | AdjoiningPropertyUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: AdjoiningPropertyUpdateManyWithWhereWithoutJobInput | AdjoiningPropertyUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: AdjoiningPropertyScalarWhereInput | AdjoiningPropertyScalarWhereInput[]
  }

  export type GeneratedDocumentUpdateManyWithoutJobNestedInput = {
    create?: XOR<GeneratedDocumentCreateWithoutJobInput, GeneratedDocumentUncheckedCreateWithoutJobInput> | GeneratedDocumentCreateWithoutJobInput[] | GeneratedDocumentUncheckedCreateWithoutJobInput[]
    connectOrCreate?: GeneratedDocumentCreateOrConnectWithoutJobInput | GeneratedDocumentCreateOrConnectWithoutJobInput[]
    upsert?: GeneratedDocumentUpsertWithWhereUniqueWithoutJobInput | GeneratedDocumentUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: GeneratedDocumentCreateManyJobInputEnvelope
    set?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
    disconnect?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
    delete?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
    connect?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
    update?: GeneratedDocumentUpdateWithWhereUniqueWithoutJobInput | GeneratedDocumentUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: GeneratedDocumentUpdateManyWithWhereWithoutJobInput | GeneratedDocumentUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: GeneratedDocumentScalarWhereInput | GeneratedDocumentScalarWhereInput[]
  }

  export type AdjoiningPropertyUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<AdjoiningPropertyCreateWithoutJobInput, AdjoiningPropertyUncheckedCreateWithoutJobInput> | AdjoiningPropertyCreateWithoutJobInput[] | AdjoiningPropertyUncheckedCreateWithoutJobInput[]
    connectOrCreate?: AdjoiningPropertyCreateOrConnectWithoutJobInput | AdjoiningPropertyCreateOrConnectWithoutJobInput[]
    upsert?: AdjoiningPropertyUpsertWithWhereUniqueWithoutJobInput | AdjoiningPropertyUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: AdjoiningPropertyCreateManyJobInputEnvelope
    set?: AdjoiningPropertyWhereUniqueInput | AdjoiningPropertyWhereUniqueInput[]
    disconnect?: AdjoiningPropertyWhereUniqueInput | AdjoiningPropertyWhereUniqueInput[]
    delete?: AdjoiningPropertyWhereUniqueInput | AdjoiningPropertyWhereUniqueInput[]
    connect?: AdjoiningPropertyWhereUniqueInput | AdjoiningPropertyWhereUniqueInput[]
    update?: AdjoiningPropertyUpdateWithWhereUniqueWithoutJobInput | AdjoiningPropertyUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: AdjoiningPropertyUpdateManyWithWhereWithoutJobInput | AdjoiningPropertyUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: AdjoiningPropertyScalarWhereInput | AdjoiningPropertyScalarWhereInput[]
  }

  export type GeneratedDocumentUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<GeneratedDocumentCreateWithoutJobInput, GeneratedDocumentUncheckedCreateWithoutJobInput> | GeneratedDocumentCreateWithoutJobInput[] | GeneratedDocumentUncheckedCreateWithoutJobInput[]
    connectOrCreate?: GeneratedDocumentCreateOrConnectWithoutJobInput | GeneratedDocumentCreateOrConnectWithoutJobInput[]
    upsert?: GeneratedDocumentUpsertWithWhereUniqueWithoutJobInput | GeneratedDocumentUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: GeneratedDocumentCreateManyJobInputEnvelope
    set?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
    disconnect?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
    delete?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
    connect?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
    update?: GeneratedDocumentUpdateWithWhereUniqueWithoutJobInput | GeneratedDocumentUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: GeneratedDocumentUpdateManyWithWhereWithoutJobInput | GeneratedDocumentUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: GeneratedDocumentScalarWhereInput | GeneratedDocumentScalarWhereInput[]
  }

  export type JobCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<JobCreateWithoutPropertiesInput, JobUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: JobCreateOrConnectWithoutPropertiesInput
    connect?: JobWhereUniqueInput
  }

  export type OwnerCreateNestedManyWithoutAdjoiningPropertyInput = {
    create?: XOR<OwnerCreateWithoutAdjoiningPropertyInput, OwnerUncheckedCreateWithoutAdjoiningPropertyInput> | OwnerCreateWithoutAdjoiningPropertyInput[] | OwnerUncheckedCreateWithoutAdjoiningPropertyInput[]
    connectOrCreate?: OwnerCreateOrConnectWithoutAdjoiningPropertyInput | OwnerCreateOrConnectWithoutAdjoiningPropertyInput[]
    createMany?: OwnerCreateManyAdjoiningPropertyInputEnvelope
    connect?: OwnerWhereUniqueInput | OwnerWhereUniqueInput[]
  }

  export type OwnerUncheckedCreateNestedManyWithoutAdjoiningPropertyInput = {
    create?: XOR<OwnerCreateWithoutAdjoiningPropertyInput, OwnerUncheckedCreateWithoutAdjoiningPropertyInput> | OwnerCreateWithoutAdjoiningPropertyInput[] | OwnerUncheckedCreateWithoutAdjoiningPropertyInput[]
    connectOrCreate?: OwnerCreateOrConnectWithoutAdjoiningPropertyInput | OwnerCreateOrConnectWithoutAdjoiningPropertyInput[]
    createMany?: OwnerCreateManyAdjoiningPropertyInputEnvelope
    connect?: OwnerWhereUniqueInput | OwnerWhereUniqueInput[]
  }

  export type JobUpdateOneRequiredWithoutPropertiesNestedInput = {
    create?: XOR<JobCreateWithoutPropertiesInput, JobUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: JobCreateOrConnectWithoutPropertiesInput
    upsert?: JobUpsertWithoutPropertiesInput
    connect?: JobWhereUniqueInput
    update?: XOR<XOR<JobUpdateToOneWithWhereWithoutPropertiesInput, JobUpdateWithoutPropertiesInput>, JobUncheckedUpdateWithoutPropertiesInput>
  }

  export type OwnerUpdateManyWithoutAdjoiningPropertyNestedInput = {
    create?: XOR<OwnerCreateWithoutAdjoiningPropertyInput, OwnerUncheckedCreateWithoutAdjoiningPropertyInput> | OwnerCreateWithoutAdjoiningPropertyInput[] | OwnerUncheckedCreateWithoutAdjoiningPropertyInput[]
    connectOrCreate?: OwnerCreateOrConnectWithoutAdjoiningPropertyInput | OwnerCreateOrConnectWithoutAdjoiningPropertyInput[]
    upsert?: OwnerUpsertWithWhereUniqueWithoutAdjoiningPropertyInput | OwnerUpsertWithWhereUniqueWithoutAdjoiningPropertyInput[]
    createMany?: OwnerCreateManyAdjoiningPropertyInputEnvelope
    set?: OwnerWhereUniqueInput | OwnerWhereUniqueInput[]
    disconnect?: OwnerWhereUniqueInput | OwnerWhereUniqueInput[]
    delete?: OwnerWhereUniqueInput | OwnerWhereUniqueInput[]
    connect?: OwnerWhereUniqueInput | OwnerWhereUniqueInput[]
    update?: OwnerUpdateWithWhereUniqueWithoutAdjoiningPropertyInput | OwnerUpdateWithWhereUniqueWithoutAdjoiningPropertyInput[]
    updateMany?: OwnerUpdateManyWithWhereWithoutAdjoiningPropertyInput | OwnerUpdateManyWithWhereWithoutAdjoiningPropertyInput[]
    deleteMany?: OwnerScalarWhereInput | OwnerScalarWhereInput[]
  }

  export type OwnerUncheckedUpdateManyWithoutAdjoiningPropertyNestedInput = {
    create?: XOR<OwnerCreateWithoutAdjoiningPropertyInput, OwnerUncheckedCreateWithoutAdjoiningPropertyInput> | OwnerCreateWithoutAdjoiningPropertyInput[] | OwnerUncheckedCreateWithoutAdjoiningPropertyInput[]
    connectOrCreate?: OwnerCreateOrConnectWithoutAdjoiningPropertyInput | OwnerCreateOrConnectWithoutAdjoiningPropertyInput[]
    upsert?: OwnerUpsertWithWhereUniqueWithoutAdjoiningPropertyInput | OwnerUpsertWithWhereUniqueWithoutAdjoiningPropertyInput[]
    createMany?: OwnerCreateManyAdjoiningPropertyInputEnvelope
    set?: OwnerWhereUniqueInput | OwnerWhereUniqueInput[]
    disconnect?: OwnerWhereUniqueInput | OwnerWhereUniqueInput[]
    delete?: OwnerWhereUniqueInput | OwnerWhereUniqueInput[]
    connect?: OwnerWhereUniqueInput | OwnerWhereUniqueInput[]
    update?: OwnerUpdateWithWhereUniqueWithoutAdjoiningPropertyInput | OwnerUpdateWithWhereUniqueWithoutAdjoiningPropertyInput[]
    updateMany?: OwnerUpdateManyWithWhereWithoutAdjoiningPropertyInput | OwnerUpdateManyWithWhereWithoutAdjoiningPropertyInput[]
    deleteMany?: OwnerScalarWhereInput | OwnerScalarWhereInput[]
  }

  export type AdjoiningPropertyCreateNestedOneWithoutOwnersInput = {
    create?: XOR<AdjoiningPropertyCreateWithoutOwnersInput, AdjoiningPropertyUncheckedCreateWithoutOwnersInput>
    connectOrCreate?: AdjoiningPropertyCreateOrConnectWithoutOwnersInput
    connect?: AdjoiningPropertyWhereUniqueInput
  }

  export type NullableEnumOwnershipTypeFieldUpdateOperationsInput = {
    set?: $Enums.OwnershipType | null
  }

  export type AdjoiningPropertyUpdateOneRequiredWithoutOwnersNestedInput = {
    create?: XOR<AdjoiningPropertyCreateWithoutOwnersInput, AdjoiningPropertyUncheckedCreateWithoutOwnersInput>
    connectOrCreate?: AdjoiningPropertyCreateOrConnectWithoutOwnersInput
    upsert?: AdjoiningPropertyUpsertWithoutOwnersInput
    connect?: AdjoiningPropertyWhereUniqueInput
    update?: XOR<XOR<AdjoiningPropertyUpdateToOneWithWhereWithoutOwnersInput, AdjoiningPropertyUpdateWithoutOwnersInput>, AdjoiningPropertyUncheckedUpdateWithoutOwnersInput>
  }

  export type DocumentTemplateCreatetagsUsedInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutTemplatesInput = {
    create?: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTemplatesInput
    connect?: UserWhereUniqueInput
  }

  export type GeneratedDocumentCreateNestedManyWithoutTemplateInput = {
    create?: XOR<GeneratedDocumentCreateWithoutTemplateInput, GeneratedDocumentUncheckedCreateWithoutTemplateInput> | GeneratedDocumentCreateWithoutTemplateInput[] | GeneratedDocumentUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: GeneratedDocumentCreateOrConnectWithoutTemplateInput | GeneratedDocumentCreateOrConnectWithoutTemplateInput[]
    createMany?: GeneratedDocumentCreateManyTemplateInputEnvelope
    connect?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
  }

  export type GeneratedDocumentUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<GeneratedDocumentCreateWithoutTemplateInput, GeneratedDocumentUncheckedCreateWithoutTemplateInput> | GeneratedDocumentCreateWithoutTemplateInput[] | GeneratedDocumentUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: GeneratedDocumentCreateOrConnectWithoutTemplateInput | GeneratedDocumentCreateOrConnectWithoutTemplateInput[]
    createMany?: GeneratedDocumentCreateManyTemplateInputEnvelope
    connect?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
  }

  export type DocumentTemplateUpdatetagsUsedInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutTemplatesNestedInput = {
    create?: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTemplatesInput
    upsert?: UserUpsertWithoutTemplatesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTemplatesInput, UserUpdateWithoutTemplatesInput>, UserUncheckedUpdateWithoutTemplatesInput>
  }

  export type GeneratedDocumentUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<GeneratedDocumentCreateWithoutTemplateInput, GeneratedDocumentUncheckedCreateWithoutTemplateInput> | GeneratedDocumentCreateWithoutTemplateInput[] | GeneratedDocumentUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: GeneratedDocumentCreateOrConnectWithoutTemplateInput | GeneratedDocumentCreateOrConnectWithoutTemplateInput[]
    upsert?: GeneratedDocumentUpsertWithWhereUniqueWithoutTemplateInput | GeneratedDocumentUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: GeneratedDocumentCreateManyTemplateInputEnvelope
    set?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
    disconnect?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
    delete?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
    connect?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
    update?: GeneratedDocumentUpdateWithWhereUniqueWithoutTemplateInput | GeneratedDocumentUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: GeneratedDocumentUpdateManyWithWhereWithoutTemplateInput | GeneratedDocumentUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: GeneratedDocumentScalarWhereInput | GeneratedDocumentScalarWhereInput[]
  }

  export type GeneratedDocumentUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<GeneratedDocumentCreateWithoutTemplateInput, GeneratedDocumentUncheckedCreateWithoutTemplateInput> | GeneratedDocumentCreateWithoutTemplateInput[] | GeneratedDocumentUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: GeneratedDocumentCreateOrConnectWithoutTemplateInput | GeneratedDocumentCreateOrConnectWithoutTemplateInput[]
    upsert?: GeneratedDocumentUpsertWithWhereUniqueWithoutTemplateInput | GeneratedDocumentUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: GeneratedDocumentCreateManyTemplateInputEnvelope
    set?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
    disconnect?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
    delete?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
    connect?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
    update?: GeneratedDocumentUpdateWithWhereUniqueWithoutTemplateInput | GeneratedDocumentUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: GeneratedDocumentUpdateManyWithWhereWithoutTemplateInput | GeneratedDocumentUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: GeneratedDocumentScalarWhereInput | GeneratedDocumentScalarWhereInput[]
  }

  export type JobCreateNestedOneWithoutGeneratedDocsInput = {
    create?: XOR<JobCreateWithoutGeneratedDocsInput, JobUncheckedCreateWithoutGeneratedDocsInput>
    connectOrCreate?: JobCreateOrConnectWithoutGeneratedDocsInput
    connect?: JobWhereUniqueInput
  }

  export type DocumentTemplateCreateNestedOneWithoutGeneratedDocsInput = {
    create?: XOR<DocumentTemplateCreateWithoutGeneratedDocsInput, DocumentTemplateUncheckedCreateWithoutGeneratedDocsInput>
    connectOrCreate?: DocumentTemplateCreateOrConnectWithoutGeneratedDocsInput
    connect?: DocumentTemplateWhereUniqueInput
  }

  export type JobUpdateOneRequiredWithoutGeneratedDocsNestedInput = {
    create?: XOR<JobCreateWithoutGeneratedDocsInput, JobUncheckedCreateWithoutGeneratedDocsInput>
    connectOrCreate?: JobCreateOrConnectWithoutGeneratedDocsInput
    upsert?: JobUpsertWithoutGeneratedDocsInput
    connect?: JobWhereUniqueInput
    update?: XOR<XOR<JobUpdateToOneWithWhereWithoutGeneratedDocsInput, JobUpdateWithoutGeneratedDocsInput>, JobUncheckedUpdateWithoutGeneratedDocsInput>
  }

  export type DocumentTemplateUpdateOneRequiredWithoutGeneratedDocsNestedInput = {
    create?: XOR<DocumentTemplateCreateWithoutGeneratedDocsInput, DocumentTemplateUncheckedCreateWithoutGeneratedDocsInput>
    connectOrCreate?: DocumentTemplateCreateOrConnectWithoutGeneratedDocsInput
    upsert?: DocumentTemplateUpsertWithoutGeneratedDocsInput
    connect?: DocumentTemplateWhereUniqueInput
    update?: XOR<XOR<DocumentTemplateUpdateToOneWithWhereWithoutGeneratedDocsInput, DocumentTemplateUpdateWithoutGeneratedDocsInput>, DocumentTemplateUncheckedUpdateWithoutGeneratedDocsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
  }

  export type NestedEnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type NestedEnumOwnershipTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.OwnershipType | EnumOwnershipTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.OwnershipType[] | ListEnumOwnershipTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.OwnershipType[] | ListEnumOwnershipTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumOwnershipTypeNullableFilter<$PrismaModel> | $Enums.OwnershipType | null
  }

  export type NestedEnumOwnershipTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OwnershipType | EnumOwnershipTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.OwnershipType[] | ListEnumOwnershipTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.OwnershipType[] | ListEnumOwnershipTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumOwnershipTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.OwnershipType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumOwnershipTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumOwnershipTypeNullableFilter<$PrismaModel>
  }

  export type JobCreateWithoutUserInput = {
    id?: string
    title: string
    reference?: string | null
    description?: string | null
    status?: $Enums.JobStatus
    createdAt?: Date | string
    properties?: AdjoiningPropertyCreateNestedManyWithoutJobInput
    generatedDocs?: GeneratedDocumentCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    reference?: string | null
    description?: string | null
    status?: $Enums.JobStatus
    createdAt?: Date | string
    properties?: AdjoiningPropertyUncheckedCreateNestedManyWithoutJobInput
    generatedDocs?: GeneratedDocumentUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobCreateOrConnectWithoutUserInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutUserInput, JobUncheckedCreateWithoutUserInput>
  }

  export type JobCreateManyUserInputEnvelope = {
    data: JobCreateManyUserInput | JobCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DocumentTemplateCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    fileUrl: string
    tagsUsed?: DocumentTemplateCreatetagsUsedInput | string[]
    createdAt?: Date | string
    generatedDocs?: GeneratedDocumentCreateNestedManyWithoutTemplateInput
  }

  export type DocumentTemplateUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    fileUrl: string
    tagsUsed?: DocumentTemplateCreatetagsUsedInput | string[]
    createdAt?: Date | string
    generatedDocs?: GeneratedDocumentUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type DocumentTemplateCreateOrConnectWithoutUserInput = {
    where: DocumentTemplateWhereUniqueInput
    create: XOR<DocumentTemplateCreateWithoutUserInput, DocumentTemplateUncheckedCreateWithoutUserInput>
  }

  export type DocumentTemplateCreateManyUserInputEnvelope = {
    data: DocumentTemplateCreateManyUserInput | DocumentTemplateCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SurveyorProfileCreateWithoutUserInput = {
    id?: string
    companyName: string
    addressLine1: string
    addressLine2?: string | null
    city: string
    postcode: string
    phone: string
    website?: string | null
  }

  export type SurveyorProfileUncheckedCreateWithoutUserInput = {
    id?: string
    companyName: string
    addressLine1: string
    addressLine2?: string | null
    city: string
    postcode: string
    phone: string
    website?: string | null
  }

  export type SurveyorProfileCreateOrConnectWithoutUserInput = {
    where: SurveyorProfileWhereUniqueInput
    create: XOR<SurveyorProfileCreateWithoutUserInput, SurveyorProfileUncheckedCreateWithoutUserInput>
  }

  export type JobUpsertWithWhereUniqueWithoutUserInput = {
    where: JobWhereUniqueInput
    update: XOR<JobUpdateWithoutUserInput, JobUncheckedUpdateWithoutUserInput>
    create: XOR<JobCreateWithoutUserInput, JobUncheckedCreateWithoutUserInput>
  }

  export type JobUpdateWithWhereUniqueWithoutUserInput = {
    where: JobWhereUniqueInput
    data: XOR<JobUpdateWithoutUserInput, JobUncheckedUpdateWithoutUserInput>
  }

  export type JobUpdateManyWithWhereWithoutUserInput = {
    where: JobScalarWhereInput
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyWithoutUserInput>
  }

  export type JobScalarWhereInput = {
    AND?: JobScalarWhereInput | JobScalarWhereInput[]
    OR?: JobScalarWhereInput[]
    NOT?: JobScalarWhereInput | JobScalarWhereInput[]
    id?: StringFilter<"Job"> | string
    userId?: StringFilter<"Job"> | string
    title?: StringFilter<"Job"> | string
    reference?: StringNullableFilter<"Job"> | string | null
    description?: StringNullableFilter<"Job"> | string | null
    status?: EnumJobStatusFilter<"Job"> | $Enums.JobStatus
    createdAt?: DateTimeFilter<"Job"> | Date | string
  }

  export type DocumentTemplateUpsertWithWhereUniqueWithoutUserInput = {
    where: DocumentTemplateWhereUniqueInput
    update: XOR<DocumentTemplateUpdateWithoutUserInput, DocumentTemplateUncheckedUpdateWithoutUserInput>
    create: XOR<DocumentTemplateCreateWithoutUserInput, DocumentTemplateUncheckedCreateWithoutUserInput>
  }

  export type DocumentTemplateUpdateWithWhereUniqueWithoutUserInput = {
    where: DocumentTemplateWhereUniqueInput
    data: XOR<DocumentTemplateUpdateWithoutUserInput, DocumentTemplateUncheckedUpdateWithoutUserInput>
  }

  export type DocumentTemplateUpdateManyWithWhereWithoutUserInput = {
    where: DocumentTemplateScalarWhereInput
    data: XOR<DocumentTemplateUpdateManyMutationInput, DocumentTemplateUncheckedUpdateManyWithoutUserInput>
  }

  export type DocumentTemplateScalarWhereInput = {
    AND?: DocumentTemplateScalarWhereInput | DocumentTemplateScalarWhereInput[]
    OR?: DocumentTemplateScalarWhereInput[]
    NOT?: DocumentTemplateScalarWhereInput | DocumentTemplateScalarWhereInput[]
    id?: StringFilter<"DocumentTemplate"> | string
    userId?: StringFilter<"DocumentTemplate"> | string
    name?: StringFilter<"DocumentTemplate"> | string
    description?: StringNullableFilter<"DocumentTemplate"> | string | null
    fileUrl?: StringFilter<"DocumentTemplate"> | string
    tagsUsed?: StringNullableListFilter<"DocumentTemplate">
    createdAt?: DateTimeFilter<"DocumentTemplate"> | Date | string
  }

  export type SurveyorProfileUpsertWithoutUserInput = {
    update: XOR<SurveyorProfileUpdateWithoutUserInput, SurveyorProfileUncheckedUpdateWithoutUserInput>
    create: XOR<SurveyorProfileCreateWithoutUserInput, SurveyorProfileUncheckedCreateWithoutUserInput>
    where?: SurveyorProfileWhereInput
  }

  export type SurveyorProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: SurveyorProfileWhereInput
    data: XOR<SurveyorProfileUpdateWithoutUserInput, SurveyorProfileUncheckedUpdateWithoutUserInput>
  }

  export type SurveyorProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SurveyorProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    jobs?: JobCreateNestedManyWithoutUserInput
    templates?: DocumentTemplateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    jobs?: JobUncheckedCreateNestedManyWithoutUserInput
    templates?: DocumentTemplateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobUpdateManyWithoutUserNestedInput
    templates?: DocumentTemplateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobUncheckedUpdateManyWithoutUserNestedInput
    templates?: DocumentTemplateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutJobsInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    templates?: DocumentTemplateCreateNestedManyWithoutUserInput
    profile?: SurveyorProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutJobsInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    templates?: DocumentTemplateUncheckedCreateNestedManyWithoutUserInput
    profile?: SurveyorProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutJobsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJobsInput, UserUncheckedCreateWithoutJobsInput>
  }

  export type AdjoiningPropertyCreateWithoutJobInput = {
    id?: string
    addressLine1: string
    addressLine2?: string | null
    postcode: string
    createdAt?: Date | string
    owners?: OwnerCreateNestedManyWithoutAdjoiningPropertyInput
  }

  export type AdjoiningPropertyUncheckedCreateWithoutJobInput = {
    id?: string
    addressLine1: string
    addressLine2?: string | null
    postcode: string
    createdAt?: Date | string
    owners?: OwnerUncheckedCreateNestedManyWithoutAdjoiningPropertyInput
  }

  export type AdjoiningPropertyCreateOrConnectWithoutJobInput = {
    where: AdjoiningPropertyWhereUniqueInput
    create: XOR<AdjoiningPropertyCreateWithoutJobInput, AdjoiningPropertyUncheckedCreateWithoutJobInput>
  }

  export type AdjoiningPropertyCreateManyJobInputEnvelope = {
    data: AdjoiningPropertyCreateManyJobInput | AdjoiningPropertyCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type GeneratedDocumentCreateWithoutJobInput = {
    id?: string
    fileUrl: string
    createdAt?: Date | string
    template: DocumentTemplateCreateNestedOneWithoutGeneratedDocsInput
  }

  export type GeneratedDocumentUncheckedCreateWithoutJobInput = {
    id?: string
    templateId: string
    fileUrl: string
    createdAt?: Date | string
  }

  export type GeneratedDocumentCreateOrConnectWithoutJobInput = {
    where: GeneratedDocumentWhereUniqueInput
    create: XOR<GeneratedDocumentCreateWithoutJobInput, GeneratedDocumentUncheckedCreateWithoutJobInput>
  }

  export type GeneratedDocumentCreateManyJobInputEnvelope = {
    data: GeneratedDocumentCreateManyJobInput | GeneratedDocumentCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutJobsInput = {
    update: XOR<UserUpdateWithoutJobsInput, UserUncheckedUpdateWithoutJobsInput>
    create: XOR<UserCreateWithoutJobsInput, UserUncheckedCreateWithoutJobsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutJobsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutJobsInput, UserUncheckedUpdateWithoutJobsInput>
  }

  export type UserUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: DocumentTemplateUpdateManyWithoutUserNestedInput
    profile?: SurveyorProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: DocumentTemplateUncheckedUpdateManyWithoutUserNestedInput
    profile?: SurveyorProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AdjoiningPropertyUpsertWithWhereUniqueWithoutJobInput = {
    where: AdjoiningPropertyWhereUniqueInput
    update: XOR<AdjoiningPropertyUpdateWithoutJobInput, AdjoiningPropertyUncheckedUpdateWithoutJobInput>
    create: XOR<AdjoiningPropertyCreateWithoutJobInput, AdjoiningPropertyUncheckedCreateWithoutJobInput>
  }

  export type AdjoiningPropertyUpdateWithWhereUniqueWithoutJobInput = {
    where: AdjoiningPropertyWhereUniqueInput
    data: XOR<AdjoiningPropertyUpdateWithoutJobInput, AdjoiningPropertyUncheckedUpdateWithoutJobInput>
  }

  export type AdjoiningPropertyUpdateManyWithWhereWithoutJobInput = {
    where: AdjoiningPropertyScalarWhereInput
    data: XOR<AdjoiningPropertyUpdateManyMutationInput, AdjoiningPropertyUncheckedUpdateManyWithoutJobInput>
  }

  export type AdjoiningPropertyScalarWhereInput = {
    AND?: AdjoiningPropertyScalarWhereInput | AdjoiningPropertyScalarWhereInput[]
    OR?: AdjoiningPropertyScalarWhereInput[]
    NOT?: AdjoiningPropertyScalarWhereInput | AdjoiningPropertyScalarWhereInput[]
    id?: StringFilter<"AdjoiningProperty"> | string
    jobId?: StringFilter<"AdjoiningProperty"> | string
    addressLine1?: StringFilter<"AdjoiningProperty"> | string
    addressLine2?: StringNullableFilter<"AdjoiningProperty"> | string | null
    postcode?: StringFilter<"AdjoiningProperty"> | string
    createdAt?: DateTimeFilter<"AdjoiningProperty"> | Date | string
  }

  export type GeneratedDocumentUpsertWithWhereUniqueWithoutJobInput = {
    where: GeneratedDocumentWhereUniqueInput
    update: XOR<GeneratedDocumentUpdateWithoutJobInput, GeneratedDocumentUncheckedUpdateWithoutJobInput>
    create: XOR<GeneratedDocumentCreateWithoutJobInput, GeneratedDocumentUncheckedCreateWithoutJobInput>
  }

  export type GeneratedDocumentUpdateWithWhereUniqueWithoutJobInput = {
    where: GeneratedDocumentWhereUniqueInput
    data: XOR<GeneratedDocumentUpdateWithoutJobInput, GeneratedDocumentUncheckedUpdateWithoutJobInput>
  }

  export type GeneratedDocumentUpdateManyWithWhereWithoutJobInput = {
    where: GeneratedDocumentScalarWhereInput
    data: XOR<GeneratedDocumentUpdateManyMutationInput, GeneratedDocumentUncheckedUpdateManyWithoutJobInput>
  }

  export type GeneratedDocumentScalarWhereInput = {
    AND?: GeneratedDocumentScalarWhereInput | GeneratedDocumentScalarWhereInput[]
    OR?: GeneratedDocumentScalarWhereInput[]
    NOT?: GeneratedDocumentScalarWhereInput | GeneratedDocumentScalarWhereInput[]
    id?: StringFilter<"GeneratedDocument"> | string
    jobId?: StringFilter<"GeneratedDocument"> | string
    templateId?: StringFilter<"GeneratedDocument"> | string
    fileUrl?: StringFilter<"GeneratedDocument"> | string
    createdAt?: DateTimeFilter<"GeneratedDocument"> | Date | string
  }

  export type JobCreateWithoutPropertiesInput = {
    id?: string
    title: string
    reference?: string | null
    description?: string | null
    status?: $Enums.JobStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutJobsInput
    generatedDocs?: GeneratedDocumentCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateWithoutPropertiesInput = {
    id?: string
    userId: string
    title: string
    reference?: string | null
    description?: string | null
    status?: $Enums.JobStatus
    createdAt?: Date | string
    generatedDocs?: GeneratedDocumentUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobCreateOrConnectWithoutPropertiesInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutPropertiesInput, JobUncheckedCreateWithoutPropertiesInput>
  }

  export type OwnerCreateWithoutAdjoiningPropertyInput = {
    id?: string
    fullName: string
    email?: string | null
    phone?: string | null
    ownershipType?: $Enums.OwnershipType | null
    createdAt?: Date | string
  }

  export type OwnerUncheckedCreateWithoutAdjoiningPropertyInput = {
    id?: string
    fullName: string
    email?: string | null
    phone?: string | null
    ownershipType?: $Enums.OwnershipType | null
    createdAt?: Date | string
  }

  export type OwnerCreateOrConnectWithoutAdjoiningPropertyInput = {
    where: OwnerWhereUniqueInput
    create: XOR<OwnerCreateWithoutAdjoiningPropertyInput, OwnerUncheckedCreateWithoutAdjoiningPropertyInput>
  }

  export type OwnerCreateManyAdjoiningPropertyInputEnvelope = {
    data: OwnerCreateManyAdjoiningPropertyInput | OwnerCreateManyAdjoiningPropertyInput[]
    skipDuplicates?: boolean
  }

  export type JobUpsertWithoutPropertiesInput = {
    update: XOR<JobUpdateWithoutPropertiesInput, JobUncheckedUpdateWithoutPropertiesInput>
    create: XOR<JobCreateWithoutPropertiesInput, JobUncheckedCreateWithoutPropertiesInput>
    where?: JobWhereInput
  }

  export type JobUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: JobWhereInput
    data: XOR<JobUpdateWithoutPropertiesInput, JobUncheckedUpdateWithoutPropertiesInput>
  }

  export type JobUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutJobsNestedInput
    generatedDocs?: GeneratedDocumentUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generatedDocs?: GeneratedDocumentUncheckedUpdateManyWithoutJobNestedInput
  }

  export type OwnerUpsertWithWhereUniqueWithoutAdjoiningPropertyInput = {
    where: OwnerWhereUniqueInput
    update: XOR<OwnerUpdateWithoutAdjoiningPropertyInput, OwnerUncheckedUpdateWithoutAdjoiningPropertyInput>
    create: XOR<OwnerCreateWithoutAdjoiningPropertyInput, OwnerUncheckedCreateWithoutAdjoiningPropertyInput>
  }

  export type OwnerUpdateWithWhereUniqueWithoutAdjoiningPropertyInput = {
    where: OwnerWhereUniqueInput
    data: XOR<OwnerUpdateWithoutAdjoiningPropertyInput, OwnerUncheckedUpdateWithoutAdjoiningPropertyInput>
  }

  export type OwnerUpdateManyWithWhereWithoutAdjoiningPropertyInput = {
    where: OwnerScalarWhereInput
    data: XOR<OwnerUpdateManyMutationInput, OwnerUncheckedUpdateManyWithoutAdjoiningPropertyInput>
  }

  export type OwnerScalarWhereInput = {
    AND?: OwnerScalarWhereInput | OwnerScalarWhereInput[]
    OR?: OwnerScalarWhereInput[]
    NOT?: OwnerScalarWhereInput | OwnerScalarWhereInput[]
    id?: StringFilter<"Owner"> | string
    propertyId?: StringFilter<"Owner"> | string
    fullName?: StringFilter<"Owner"> | string
    email?: StringNullableFilter<"Owner"> | string | null
    phone?: StringNullableFilter<"Owner"> | string | null
    ownershipType?: EnumOwnershipTypeNullableFilter<"Owner"> | $Enums.OwnershipType | null
    createdAt?: DateTimeFilter<"Owner"> | Date | string
  }

  export type AdjoiningPropertyCreateWithoutOwnersInput = {
    id?: string
    addressLine1: string
    addressLine2?: string | null
    postcode: string
    createdAt?: Date | string
    job: JobCreateNestedOneWithoutPropertiesInput
  }

  export type AdjoiningPropertyUncheckedCreateWithoutOwnersInput = {
    id?: string
    jobId: string
    addressLine1: string
    addressLine2?: string | null
    postcode: string
    createdAt?: Date | string
  }

  export type AdjoiningPropertyCreateOrConnectWithoutOwnersInput = {
    where: AdjoiningPropertyWhereUniqueInput
    create: XOR<AdjoiningPropertyCreateWithoutOwnersInput, AdjoiningPropertyUncheckedCreateWithoutOwnersInput>
  }

  export type AdjoiningPropertyUpsertWithoutOwnersInput = {
    update: XOR<AdjoiningPropertyUpdateWithoutOwnersInput, AdjoiningPropertyUncheckedUpdateWithoutOwnersInput>
    create: XOR<AdjoiningPropertyCreateWithoutOwnersInput, AdjoiningPropertyUncheckedCreateWithoutOwnersInput>
    where?: AdjoiningPropertyWhereInput
  }

  export type AdjoiningPropertyUpdateToOneWithWhereWithoutOwnersInput = {
    where?: AdjoiningPropertyWhereInput
    data: XOR<AdjoiningPropertyUpdateWithoutOwnersInput, AdjoiningPropertyUncheckedUpdateWithoutOwnersInput>
  }

  export type AdjoiningPropertyUpdateWithoutOwnersInput = {
    id?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobUpdateOneRequiredWithoutPropertiesNestedInput
  }

  export type AdjoiningPropertyUncheckedUpdateWithoutOwnersInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutTemplatesInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    jobs?: JobCreateNestedManyWithoutUserInput
    profile?: SurveyorProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTemplatesInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    jobs?: JobUncheckedCreateNestedManyWithoutUserInput
    profile?: SurveyorProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTemplatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
  }

  export type GeneratedDocumentCreateWithoutTemplateInput = {
    id?: string
    fileUrl: string
    createdAt?: Date | string
    job: JobCreateNestedOneWithoutGeneratedDocsInput
  }

  export type GeneratedDocumentUncheckedCreateWithoutTemplateInput = {
    id?: string
    jobId: string
    fileUrl: string
    createdAt?: Date | string
  }

  export type GeneratedDocumentCreateOrConnectWithoutTemplateInput = {
    where: GeneratedDocumentWhereUniqueInput
    create: XOR<GeneratedDocumentCreateWithoutTemplateInput, GeneratedDocumentUncheckedCreateWithoutTemplateInput>
  }

  export type GeneratedDocumentCreateManyTemplateInputEnvelope = {
    data: GeneratedDocumentCreateManyTemplateInput | GeneratedDocumentCreateManyTemplateInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTemplatesInput = {
    update: XOR<UserUpdateWithoutTemplatesInput, UserUncheckedUpdateWithoutTemplatesInput>
    create: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTemplatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTemplatesInput, UserUncheckedUpdateWithoutTemplatesInput>
  }

  export type UserUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobUpdateManyWithoutUserNestedInput
    profile?: SurveyorProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobUncheckedUpdateManyWithoutUserNestedInput
    profile?: SurveyorProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type GeneratedDocumentUpsertWithWhereUniqueWithoutTemplateInput = {
    where: GeneratedDocumentWhereUniqueInput
    update: XOR<GeneratedDocumentUpdateWithoutTemplateInput, GeneratedDocumentUncheckedUpdateWithoutTemplateInput>
    create: XOR<GeneratedDocumentCreateWithoutTemplateInput, GeneratedDocumentUncheckedCreateWithoutTemplateInput>
  }

  export type GeneratedDocumentUpdateWithWhereUniqueWithoutTemplateInput = {
    where: GeneratedDocumentWhereUniqueInput
    data: XOR<GeneratedDocumentUpdateWithoutTemplateInput, GeneratedDocumentUncheckedUpdateWithoutTemplateInput>
  }

  export type GeneratedDocumentUpdateManyWithWhereWithoutTemplateInput = {
    where: GeneratedDocumentScalarWhereInput
    data: XOR<GeneratedDocumentUpdateManyMutationInput, GeneratedDocumentUncheckedUpdateManyWithoutTemplateInput>
  }

  export type JobCreateWithoutGeneratedDocsInput = {
    id?: string
    title: string
    reference?: string | null
    description?: string | null
    status?: $Enums.JobStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutJobsInput
    properties?: AdjoiningPropertyCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateWithoutGeneratedDocsInput = {
    id?: string
    userId: string
    title: string
    reference?: string | null
    description?: string | null
    status?: $Enums.JobStatus
    createdAt?: Date | string
    properties?: AdjoiningPropertyUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobCreateOrConnectWithoutGeneratedDocsInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutGeneratedDocsInput, JobUncheckedCreateWithoutGeneratedDocsInput>
  }

  export type DocumentTemplateCreateWithoutGeneratedDocsInput = {
    id?: string
    name: string
    description?: string | null
    fileUrl: string
    tagsUsed?: DocumentTemplateCreatetagsUsedInput | string[]
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTemplatesInput
  }

  export type DocumentTemplateUncheckedCreateWithoutGeneratedDocsInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    fileUrl: string
    tagsUsed?: DocumentTemplateCreatetagsUsedInput | string[]
    createdAt?: Date | string
  }

  export type DocumentTemplateCreateOrConnectWithoutGeneratedDocsInput = {
    where: DocumentTemplateWhereUniqueInput
    create: XOR<DocumentTemplateCreateWithoutGeneratedDocsInput, DocumentTemplateUncheckedCreateWithoutGeneratedDocsInput>
  }

  export type JobUpsertWithoutGeneratedDocsInput = {
    update: XOR<JobUpdateWithoutGeneratedDocsInput, JobUncheckedUpdateWithoutGeneratedDocsInput>
    create: XOR<JobCreateWithoutGeneratedDocsInput, JobUncheckedCreateWithoutGeneratedDocsInput>
    where?: JobWhereInput
  }

  export type JobUpdateToOneWithWhereWithoutGeneratedDocsInput = {
    where?: JobWhereInput
    data: XOR<JobUpdateWithoutGeneratedDocsInput, JobUncheckedUpdateWithoutGeneratedDocsInput>
  }

  export type JobUpdateWithoutGeneratedDocsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutJobsNestedInput
    properties?: AdjoiningPropertyUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutGeneratedDocsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: AdjoiningPropertyUncheckedUpdateManyWithoutJobNestedInput
  }

  export type DocumentTemplateUpsertWithoutGeneratedDocsInput = {
    update: XOR<DocumentTemplateUpdateWithoutGeneratedDocsInput, DocumentTemplateUncheckedUpdateWithoutGeneratedDocsInput>
    create: XOR<DocumentTemplateCreateWithoutGeneratedDocsInput, DocumentTemplateUncheckedCreateWithoutGeneratedDocsInput>
    where?: DocumentTemplateWhereInput
  }

  export type DocumentTemplateUpdateToOneWithWhereWithoutGeneratedDocsInput = {
    where?: DocumentTemplateWhereInput
    data: XOR<DocumentTemplateUpdateWithoutGeneratedDocsInput, DocumentTemplateUncheckedUpdateWithoutGeneratedDocsInput>
  }

  export type DocumentTemplateUpdateWithoutGeneratedDocsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    tagsUsed?: DocumentTemplateUpdatetagsUsedInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTemplatesNestedInput
  }

  export type DocumentTemplateUncheckedUpdateWithoutGeneratedDocsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    tagsUsed?: DocumentTemplateUpdatetagsUsedInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCreateManyUserInput = {
    id?: string
    title: string
    reference?: string | null
    description?: string | null
    status?: $Enums.JobStatus
    createdAt?: Date | string
  }

  export type DocumentTemplateCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    fileUrl: string
    tagsUsed?: DocumentTemplateCreatetagsUsedInput | string[]
    createdAt?: Date | string
  }

  export type JobUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: AdjoiningPropertyUpdateManyWithoutJobNestedInput
    generatedDocs?: GeneratedDocumentUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: AdjoiningPropertyUncheckedUpdateManyWithoutJobNestedInput
    generatedDocs?: GeneratedDocumentUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentTemplateUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    tagsUsed?: DocumentTemplateUpdatetagsUsedInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generatedDocs?: GeneratedDocumentUpdateManyWithoutTemplateNestedInput
  }

  export type DocumentTemplateUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    tagsUsed?: DocumentTemplateUpdatetagsUsedInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generatedDocs?: GeneratedDocumentUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type DocumentTemplateUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    tagsUsed?: DocumentTemplateUpdatetagsUsedInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdjoiningPropertyCreateManyJobInput = {
    id?: string
    addressLine1: string
    addressLine2?: string | null
    postcode: string
    createdAt?: Date | string
  }

  export type GeneratedDocumentCreateManyJobInput = {
    id?: string
    templateId: string
    fileUrl: string
    createdAt?: Date | string
  }

  export type AdjoiningPropertyUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owners?: OwnerUpdateManyWithoutAdjoiningPropertyNestedInput
  }

  export type AdjoiningPropertyUncheckedUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owners?: OwnerUncheckedUpdateManyWithoutAdjoiningPropertyNestedInput
  }

  export type AdjoiningPropertyUncheckedUpdateManyWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratedDocumentUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    template?: DocumentTemplateUpdateOneRequiredWithoutGeneratedDocsNestedInput
  }

  export type GeneratedDocumentUncheckedUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratedDocumentUncheckedUpdateManyWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OwnerCreateManyAdjoiningPropertyInput = {
    id?: string
    fullName: string
    email?: string | null
    phone?: string | null
    ownershipType?: $Enums.OwnershipType | null
    createdAt?: Date | string
  }

  export type OwnerUpdateWithoutAdjoiningPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    ownershipType?: NullableEnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OwnerUncheckedUpdateWithoutAdjoiningPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    ownershipType?: NullableEnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OwnerUncheckedUpdateManyWithoutAdjoiningPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    ownershipType?: NullableEnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratedDocumentCreateManyTemplateInput = {
    id?: string
    jobId: string
    fileUrl: string
    createdAt?: Date | string
  }

  export type GeneratedDocumentUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobUpdateOneRequiredWithoutGeneratedDocsNestedInput
  }

  export type GeneratedDocumentUncheckedUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratedDocumentUncheckedUpdateManyWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}