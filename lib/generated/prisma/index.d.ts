
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
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Personil
 * 
 */
export type Personil = $Result.DefaultSelection<Prisma.$PersonilPayload>
/**
 * Model History
 * 
 */
export type History = $Result.DefaultSelection<Prisma.$HistoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * const users = await prisma.users.findMany()
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
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.personil`: Exposes CRUD operations for the **Personil** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Personils
    * const personils = await prisma.personil.findMany()
    * ```
    */
  get personil(): Prisma.PersonilDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.history`: Exposes CRUD operations for the **History** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Histories
    * const histories = await prisma.history.findMany()
    * ```
    */
  get history(): Prisma.HistoryDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
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
    Users: 'Users',
    Personil: 'Personil',
    History: 'History'
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
      modelProps: "users" | "personil" | "history"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Personil: {
        payload: Prisma.$PersonilPayload<ExtArgs>
        fields: Prisma.PersonilFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonilFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonilPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonilFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonilPayload>
          }
          findFirst: {
            args: Prisma.PersonilFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonilPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonilFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonilPayload>
          }
          findMany: {
            args: Prisma.PersonilFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonilPayload>[]
          }
          create: {
            args: Prisma.PersonilCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonilPayload>
          }
          createMany: {
            args: Prisma.PersonilCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonilCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonilPayload>[]
          }
          delete: {
            args: Prisma.PersonilDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonilPayload>
          }
          update: {
            args: Prisma.PersonilUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonilPayload>
          }
          deleteMany: {
            args: Prisma.PersonilDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonilUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonilUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonilPayload>[]
          }
          upsert: {
            args: Prisma.PersonilUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonilPayload>
          }
          aggregate: {
            args: Prisma.PersonilAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersonil>
          }
          groupBy: {
            args: Prisma.PersonilGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonilGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonilCountArgs<ExtArgs>
            result: $Utils.Optional<PersonilCountAggregateOutputType> | number
          }
        }
      }
      History: {
        payload: Prisma.$HistoryPayload<ExtArgs>
        fields: Prisma.HistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          findFirst: {
            args: Prisma.HistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          findMany: {
            args: Prisma.HistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>[]
          }
          create: {
            args: Prisma.HistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          createMany: {
            args: Prisma.HistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>[]
          }
          delete: {
            args: Prisma.HistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          update: {
            args: Prisma.HistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          deleteMany: {
            args: Prisma.HistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>[]
          }
          upsert: {
            args: Prisma.HistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          aggregate: {
            args: Prisma.HistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistory>
          }
          groupBy: {
            args: Prisma.HistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoryCountArgs<ExtArgs>
            result: $Utils.Optional<HistoryCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    users?: UsersOmit
    personil?: PersonilOmit
    history?: HistoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    histories: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    histories?: boolean | UsersCountOutputTypeCountHistoriesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryWhereInput
  }


  /**
   * Count Type PersonilCountOutputType
   */

  export type PersonilCountOutputType = {
    histories: number
  }

  export type PersonilCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    histories?: boolean | PersonilCountOutputTypeCountHistoriesArgs
  }

  // Custom InputTypes
  /**
   * PersonilCountOutputType without action
   */
  export type PersonilCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonilCountOutputType
     */
    select?: PersonilCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PersonilCountOutputType without action
   */
  export type PersonilCountOutputTypeCountHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    otp: string | null
    otpExpires: Date | null
    createdAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    otp: string | null
    otpExpires: Date | null
    createdAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    otp: number
    otpExpires: number
    createdAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    otp?: true
    otpExpires?: true
    createdAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    otp?: true
    otpExpires?: true
    createdAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    otp?: true
    otpExpires?: true
    createdAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
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
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    otp: string | null
    otpExpires: Date | null
    createdAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    otp?: boolean
    otpExpires?: boolean
    createdAt?: boolean
    histories?: boolean | Users$historiesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    otp?: boolean
    otpExpires?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    otp?: boolean
    otpExpires?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    otp?: boolean
    otpExpires?: boolean
    createdAt?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "otp" | "otpExpires" | "createdAt", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    histories?: boolean | Users$historiesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      histories: Prisma.$HistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      role: $Enums.Role
      otp: string | null
      otpExpires: Date | null
      createdAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    histories<T extends Users$historiesArgs<ExtArgs> = {}>(args?: Subset<T, Users$historiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly name: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'Role'>
    readonly otp: FieldRef<"Users", 'String'>
    readonly otpExpires: FieldRef<"Users", 'DateTime'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.histories
   */
  export type Users$historiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    where?: HistoryWhereInput
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    cursor?: HistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Personil
   */

  export type AggregatePersonil = {
    _count: PersonilCountAggregateOutputType | null
    _avg: PersonilAvgAggregateOutputType | null
    _sum: PersonilSumAggregateOutputType | null
    _min: PersonilMinAggregateOutputType | null
    _max: PersonilMaxAggregateOutputType | null
  }

  export type PersonilAvgAggregateOutputType = {
    id: number | null
  }

  export type PersonilSumAggregateOutputType = {
    id: number | null
  }

  export type PersonilMinAggregateOutputType = {
    id: number | null
    NAMA1: string | null
    NAMA2: string | null
    NAMA3: string | null
    KDPKT: string | null
    PANGKAT: string | null
    KORPS: string | null
    HAR: string | null
    NRP: string | null
    KELAHIRAN: string | null
    JAB1: string | null
    JAB2: string | null
    JAB3: string | null
    JAB4: string | null
    JAB5: string | null
    TMTTNI: string | null
    TGAB: string | null
    BLAB: string | null
    THAB: string | null
    KDSAH: string | null
    TMTMPP: string | null
    TGMPP: string | null
    BLMPP: string | null
    THMPP: string | null
    SDTG: string | null
    SDBL: string | null
    SDTH: string | null
    TMTHENTI: string | null
    TGHT: string | null
    BLHT: string | null
    THHT: string | null
    KET1: string | null
    KET2: string | null
    KET3: string | null
    KET4: string | null
    KET5: string | null
    KET6: string | null
    USUL: string | null
    FLR: string | null
    NOSKEP: string | null
    TGSKEP: string | null
    KEPPRES: string | null
    TGKEPP: string | null
    A: string | null
    BL: string | null
    TH: string | null
    KDM: string | null
    KEPPANG: string | null
    TGKEPPANG: string | null
    TGGAL: string | null
    BLGAL: string | null
    BLGAL1: string | null
    THGAL: string | null
    createdAt: Date | null
  }

  export type PersonilMaxAggregateOutputType = {
    id: number | null
    NAMA1: string | null
    NAMA2: string | null
    NAMA3: string | null
    KDPKT: string | null
    PANGKAT: string | null
    KORPS: string | null
    HAR: string | null
    NRP: string | null
    KELAHIRAN: string | null
    JAB1: string | null
    JAB2: string | null
    JAB3: string | null
    JAB4: string | null
    JAB5: string | null
    TMTTNI: string | null
    TGAB: string | null
    BLAB: string | null
    THAB: string | null
    KDSAH: string | null
    TMTMPP: string | null
    TGMPP: string | null
    BLMPP: string | null
    THMPP: string | null
    SDTG: string | null
    SDBL: string | null
    SDTH: string | null
    TMTHENTI: string | null
    TGHT: string | null
    BLHT: string | null
    THHT: string | null
    KET1: string | null
    KET2: string | null
    KET3: string | null
    KET4: string | null
    KET5: string | null
    KET6: string | null
    USUL: string | null
    FLR: string | null
    NOSKEP: string | null
    TGSKEP: string | null
    KEPPRES: string | null
    TGKEPP: string | null
    A: string | null
    BL: string | null
    TH: string | null
    KDM: string | null
    KEPPANG: string | null
    TGKEPPANG: string | null
    TGGAL: string | null
    BLGAL: string | null
    BLGAL1: string | null
    THGAL: string | null
    createdAt: Date | null
  }

  export type PersonilCountAggregateOutputType = {
    id: number
    NAMA1: number
    NAMA2: number
    NAMA3: number
    KDPKT: number
    PANGKAT: number
    KORPS: number
    HAR: number
    NRP: number
    KELAHIRAN: number
    JAB1: number
    JAB2: number
    JAB3: number
    JAB4: number
    JAB5: number
    TMTTNI: number
    TGAB: number
    BLAB: number
    THAB: number
    KDSAH: number
    TMTMPP: number
    TGMPP: number
    BLMPP: number
    THMPP: number
    SDTG: number
    SDBL: number
    SDTH: number
    TMTHENTI: number
    TGHT: number
    BLHT: number
    THHT: number
    KET1: number
    KET2: number
    KET3: number
    KET4: number
    KET5: number
    KET6: number
    USUL: number
    FLR: number
    NOSKEP: number
    TGSKEP: number
    KEPPRES: number
    TGKEPP: number
    A: number
    BL: number
    TH: number
    KDM: number
    KEPPANG: number
    TGKEPPANG: number
    TGGAL: number
    BLGAL: number
    BLGAL1: number
    THGAL: number
    createdAt: number
    _all: number
  }


  export type PersonilAvgAggregateInputType = {
    id?: true
  }

  export type PersonilSumAggregateInputType = {
    id?: true
  }

  export type PersonilMinAggregateInputType = {
    id?: true
    NAMA1?: true
    NAMA2?: true
    NAMA3?: true
    KDPKT?: true
    PANGKAT?: true
    KORPS?: true
    HAR?: true
    NRP?: true
    KELAHIRAN?: true
    JAB1?: true
    JAB2?: true
    JAB3?: true
    JAB4?: true
    JAB5?: true
    TMTTNI?: true
    TGAB?: true
    BLAB?: true
    THAB?: true
    KDSAH?: true
    TMTMPP?: true
    TGMPP?: true
    BLMPP?: true
    THMPP?: true
    SDTG?: true
    SDBL?: true
    SDTH?: true
    TMTHENTI?: true
    TGHT?: true
    BLHT?: true
    THHT?: true
    KET1?: true
    KET2?: true
    KET3?: true
    KET4?: true
    KET5?: true
    KET6?: true
    USUL?: true
    FLR?: true
    NOSKEP?: true
    TGSKEP?: true
    KEPPRES?: true
    TGKEPP?: true
    A?: true
    BL?: true
    TH?: true
    KDM?: true
    KEPPANG?: true
    TGKEPPANG?: true
    TGGAL?: true
    BLGAL?: true
    BLGAL1?: true
    THGAL?: true
    createdAt?: true
  }

  export type PersonilMaxAggregateInputType = {
    id?: true
    NAMA1?: true
    NAMA2?: true
    NAMA3?: true
    KDPKT?: true
    PANGKAT?: true
    KORPS?: true
    HAR?: true
    NRP?: true
    KELAHIRAN?: true
    JAB1?: true
    JAB2?: true
    JAB3?: true
    JAB4?: true
    JAB5?: true
    TMTTNI?: true
    TGAB?: true
    BLAB?: true
    THAB?: true
    KDSAH?: true
    TMTMPP?: true
    TGMPP?: true
    BLMPP?: true
    THMPP?: true
    SDTG?: true
    SDBL?: true
    SDTH?: true
    TMTHENTI?: true
    TGHT?: true
    BLHT?: true
    THHT?: true
    KET1?: true
    KET2?: true
    KET3?: true
    KET4?: true
    KET5?: true
    KET6?: true
    USUL?: true
    FLR?: true
    NOSKEP?: true
    TGSKEP?: true
    KEPPRES?: true
    TGKEPP?: true
    A?: true
    BL?: true
    TH?: true
    KDM?: true
    KEPPANG?: true
    TGKEPPANG?: true
    TGGAL?: true
    BLGAL?: true
    BLGAL1?: true
    THGAL?: true
    createdAt?: true
  }

  export type PersonilCountAggregateInputType = {
    id?: true
    NAMA1?: true
    NAMA2?: true
    NAMA3?: true
    KDPKT?: true
    PANGKAT?: true
    KORPS?: true
    HAR?: true
    NRP?: true
    KELAHIRAN?: true
    JAB1?: true
    JAB2?: true
    JAB3?: true
    JAB4?: true
    JAB5?: true
    TMTTNI?: true
    TGAB?: true
    BLAB?: true
    THAB?: true
    KDSAH?: true
    TMTMPP?: true
    TGMPP?: true
    BLMPP?: true
    THMPP?: true
    SDTG?: true
    SDBL?: true
    SDTH?: true
    TMTHENTI?: true
    TGHT?: true
    BLHT?: true
    THHT?: true
    KET1?: true
    KET2?: true
    KET3?: true
    KET4?: true
    KET5?: true
    KET6?: true
    USUL?: true
    FLR?: true
    NOSKEP?: true
    TGSKEP?: true
    KEPPRES?: true
    TGKEPP?: true
    A?: true
    BL?: true
    TH?: true
    KDM?: true
    KEPPANG?: true
    TGKEPPANG?: true
    TGGAL?: true
    BLGAL?: true
    BLGAL1?: true
    THGAL?: true
    createdAt?: true
    _all?: true
  }

  export type PersonilAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Personil to aggregate.
     */
    where?: PersonilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personils to fetch.
     */
    orderBy?: PersonilOrderByWithRelationInput | PersonilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Personils
    **/
    _count?: true | PersonilCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonilAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonilSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonilMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonilMaxAggregateInputType
  }

  export type GetPersonilAggregateType<T extends PersonilAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonil]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonil[P]>
      : GetScalarType<T[P], AggregatePersonil[P]>
  }




  export type PersonilGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonilWhereInput
    orderBy?: PersonilOrderByWithAggregationInput | PersonilOrderByWithAggregationInput[]
    by: PersonilScalarFieldEnum[] | PersonilScalarFieldEnum
    having?: PersonilScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonilCountAggregateInputType | true
    _avg?: PersonilAvgAggregateInputType
    _sum?: PersonilSumAggregateInputType
    _min?: PersonilMinAggregateInputType
    _max?: PersonilMaxAggregateInputType
  }

  export type PersonilGroupByOutputType = {
    id: number
    NAMA1: string | null
    NAMA2: string | null
    NAMA3: string | null
    KDPKT: string | null
    PANGKAT: string | null
    KORPS: string | null
    HAR: string | null
    NRP: string | null
    KELAHIRAN: string | null
    JAB1: string | null
    JAB2: string | null
    JAB3: string | null
    JAB4: string | null
    JAB5: string | null
    TMTTNI: string | null
    TGAB: string | null
    BLAB: string | null
    THAB: string | null
    KDSAH: string | null
    TMTMPP: string | null
    TGMPP: string | null
    BLMPP: string | null
    THMPP: string | null
    SDTG: string | null
    SDBL: string | null
    SDTH: string | null
    TMTHENTI: string | null
    TGHT: string | null
    BLHT: string | null
    THHT: string | null
    KET1: string | null
    KET2: string | null
    KET3: string | null
    KET4: string | null
    KET5: string | null
    KET6: string | null
    USUL: string | null
    FLR: string | null
    NOSKEP: string | null
    TGSKEP: string | null
    KEPPRES: string | null
    TGKEPP: string | null
    A: string | null
    BL: string | null
    TH: string | null
    KDM: string | null
    KEPPANG: string | null
    TGKEPPANG: string | null
    TGGAL: string | null
    BLGAL: string | null
    BLGAL1: string | null
    THGAL: string | null
    createdAt: Date
    _count: PersonilCountAggregateOutputType | null
    _avg: PersonilAvgAggregateOutputType | null
    _sum: PersonilSumAggregateOutputType | null
    _min: PersonilMinAggregateOutputType | null
    _max: PersonilMaxAggregateOutputType | null
  }

  type GetPersonilGroupByPayload<T extends PersonilGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonilGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonilGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonilGroupByOutputType[P]>
            : GetScalarType<T[P], PersonilGroupByOutputType[P]>
        }
      >
    >


  export type PersonilSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    NAMA1?: boolean
    NAMA2?: boolean
    NAMA3?: boolean
    KDPKT?: boolean
    PANGKAT?: boolean
    KORPS?: boolean
    HAR?: boolean
    NRP?: boolean
    KELAHIRAN?: boolean
    JAB1?: boolean
    JAB2?: boolean
    JAB3?: boolean
    JAB4?: boolean
    JAB5?: boolean
    TMTTNI?: boolean
    TGAB?: boolean
    BLAB?: boolean
    THAB?: boolean
    KDSAH?: boolean
    TMTMPP?: boolean
    TGMPP?: boolean
    BLMPP?: boolean
    THMPP?: boolean
    SDTG?: boolean
    SDBL?: boolean
    SDTH?: boolean
    TMTHENTI?: boolean
    TGHT?: boolean
    BLHT?: boolean
    THHT?: boolean
    KET1?: boolean
    KET2?: boolean
    KET3?: boolean
    KET4?: boolean
    KET5?: boolean
    KET6?: boolean
    USUL?: boolean
    FLR?: boolean
    NOSKEP?: boolean
    TGSKEP?: boolean
    KEPPRES?: boolean
    TGKEPP?: boolean
    A?: boolean
    BL?: boolean
    TH?: boolean
    KDM?: boolean
    KEPPANG?: boolean
    TGKEPPANG?: boolean
    TGGAL?: boolean
    BLGAL?: boolean
    BLGAL1?: boolean
    THGAL?: boolean
    createdAt?: boolean
    histories?: boolean | Personil$historiesArgs<ExtArgs>
    _count?: boolean | PersonilCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personil"]>

  export type PersonilSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    NAMA1?: boolean
    NAMA2?: boolean
    NAMA3?: boolean
    KDPKT?: boolean
    PANGKAT?: boolean
    KORPS?: boolean
    HAR?: boolean
    NRP?: boolean
    KELAHIRAN?: boolean
    JAB1?: boolean
    JAB2?: boolean
    JAB3?: boolean
    JAB4?: boolean
    JAB5?: boolean
    TMTTNI?: boolean
    TGAB?: boolean
    BLAB?: boolean
    THAB?: boolean
    KDSAH?: boolean
    TMTMPP?: boolean
    TGMPP?: boolean
    BLMPP?: boolean
    THMPP?: boolean
    SDTG?: boolean
    SDBL?: boolean
    SDTH?: boolean
    TMTHENTI?: boolean
    TGHT?: boolean
    BLHT?: boolean
    THHT?: boolean
    KET1?: boolean
    KET2?: boolean
    KET3?: boolean
    KET4?: boolean
    KET5?: boolean
    KET6?: boolean
    USUL?: boolean
    FLR?: boolean
    NOSKEP?: boolean
    TGSKEP?: boolean
    KEPPRES?: boolean
    TGKEPP?: boolean
    A?: boolean
    BL?: boolean
    TH?: boolean
    KDM?: boolean
    KEPPANG?: boolean
    TGKEPPANG?: boolean
    TGGAL?: boolean
    BLGAL?: boolean
    BLGAL1?: boolean
    THGAL?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["personil"]>

  export type PersonilSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    NAMA1?: boolean
    NAMA2?: boolean
    NAMA3?: boolean
    KDPKT?: boolean
    PANGKAT?: boolean
    KORPS?: boolean
    HAR?: boolean
    NRP?: boolean
    KELAHIRAN?: boolean
    JAB1?: boolean
    JAB2?: boolean
    JAB3?: boolean
    JAB4?: boolean
    JAB5?: boolean
    TMTTNI?: boolean
    TGAB?: boolean
    BLAB?: boolean
    THAB?: boolean
    KDSAH?: boolean
    TMTMPP?: boolean
    TGMPP?: boolean
    BLMPP?: boolean
    THMPP?: boolean
    SDTG?: boolean
    SDBL?: boolean
    SDTH?: boolean
    TMTHENTI?: boolean
    TGHT?: boolean
    BLHT?: boolean
    THHT?: boolean
    KET1?: boolean
    KET2?: boolean
    KET3?: boolean
    KET4?: boolean
    KET5?: boolean
    KET6?: boolean
    USUL?: boolean
    FLR?: boolean
    NOSKEP?: boolean
    TGSKEP?: boolean
    KEPPRES?: boolean
    TGKEPP?: boolean
    A?: boolean
    BL?: boolean
    TH?: boolean
    KDM?: boolean
    KEPPANG?: boolean
    TGKEPPANG?: boolean
    TGGAL?: boolean
    BLGAL?: boolean
    BLGAL1?: boolean
    THGAL?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["personil"]>

  export type PersonilSelectScalar = {
    id?: boolean
    NAMA1?: boolean
    NAMA2?: boolean
    NAMA3?: boolean
    KDPKT?: boolean
    PANGKAT?: boolean
    KORPS?: boolean
    HAR?: boolean
    NRP?: boolean
    KELAHIRAN?: boolean
    JAB1?: boolean
    JAB2?: boolean
    JAB3?: boolean
    JAB4?: boolean
    JAB5?: boolean
    TMTTNI?: boolean
    TGAB?: boolean
    BLAB?: boolean
    THAB?: boolean
    KDSAH?: boolean
    TMTMPP?: boolean
    TGMPP?: boolean
    BLMPP?: boolean
    THMPP?: boolean
    SDTG?: boolean
    SDBL?: boolean
    SDTH?: boolean
    TMTHENTI?: boolean
    TGHT?: boolean
    BLHT?: boolean
    THHT?: boolean
    KET1?: boolean
    KET2?: boolean
    KET3?: boolean
    KET4?: boolean
    KET5?: boolean
    KET6?: boolean
    USUL?: boolean
    FLR?: boolean
    NOSKEP?: boolean
    TGSKEP?: boolean
    KEPPRES?: boolean
    TGKEPP?: boolean
    A?: boolean
    BL?: boolean
    TH?: boolean
    KDM?: boolean
    KEPPANG?: boolean
    TGKEPPANG?: boolean
    TGGAL?: boolean
    BLGAL?: boolean
    BLGAL1?: boolean
    THGAL?: boolean
    createdAt?: boolean
  }

  export type PersonilOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "NAMA1" | "NAMA2" | "NAMA3" | "KDPKT" | "PANGKAT" | "KORPS" | "HAR" | "NRP" | "KELAHIRAN" | "JAB1" | "JAB2" | "JAB3" | "JAB4" | "JAB5" | "TMTTNI" | "TGAB" | "BLAB" | "THAB" | "KDSAH" | "TMTMPP" | "TGMPP" | "BLMPP" | "THMPP" | "SDTG" | "SDBL" | "SDTH" | "TMTHENTI" | "TGHT" | "BLHT" | "THHT" | "KET1" | "KET2" | "KET3" | "KET4" | "KET5" | "KET6" | "USUL" | "FLR" | "NOSKEP" | "TGSKEP" | "KEPPRES" | "TGKEPP" | "A" | "BL" | "TH" | "KDM" | "KEPPANG" | "TGKEPPANG" | "TGGAL" | "BLGAL" | "BLGAL1" | "THGAL" | "createdAt", ExtArgs["result"]["personil"]>
  export type PersonilInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    histories?: boolean | Personil$historiesArgs<ExtArgs>
    _count?: boolean | PersonilCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PersonilIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PersonilIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PersonilPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Personil"
    objects: {
      histories: Prisma.$HistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      NAMA1: string | null
      NAMA2: string | null
      NAMA3: string | null
      KDPKT: string | null
      PANGKAT: string | null
      KORPS: string | null
      HAR: string | null
      NRP: string | null
      KELAHIRAN: string | null
      JAB1: string | null
      JAB2: string | null
      JAB3: string | null
      JAB4: string | null
      JAB5: string | null
      TMTTNI: string | null
      TGAB: string | null
      BLAB: string | null
      THAB: string | null
      KDSAH: string | null
      TMTMPP: string | null
      TGMPP: string | null
      BLMPP: string | null
      THMPP: string | null
      SDTG: string | null
      SDBL: string | null
      SDTH: string | null
      TMTHENTI: string | null
      TGHT: string | null
      BLHT: string | null
      THHT: string | null
      KET1: string | null
      KET2: string | null
      KET3: string | null
      KET4: string | null
      KET5: string | null
      KET6: string | null
      USUL: string | null
      FLR: string | null
      NOSKEP: string | null
      TGSKEP: string | null
      KEPPRES: string | null
      TGKEPP: string | null
      A: string | null
      BL: string | null
      TH: string | null
      KDM: string | null
      KEPPANG: string | null
      TGKEPPANG: string | null
      TGGAL: string | null
      BLGAL: string | null
      BLGAL1: string | null
      THGAL: string | null
      createdAt: Date
    }, ExtArgs["result"]["personil"]>
    composites: {}
  }

  type PersonilGetPayload<S extends boolean | null | undefined | PersonilDefaultArgs> = $Result.GetResult<Prisma.$PersonilPayload, S>

  type PersonilCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonilFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonilCountAggregateInputType | true
    }

  export interface PersonilDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Personil'], meta: { name: 'Personil' } }
    /**
     * Find zero or one Personil that matches the filter.
     * @param {PersonilFindUniqueArgs} args - Arguments to find a Personil
     * @example
     * // Get one Personil
     * const personil = await prisma.personil.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonilFindUniqueArgs>(args: SelectSubset<T, PersonilFindUniqueArgs<ExtArgs>>): Prisma__PersonilClient<$Result.GetResult<Prisma.$PersonilPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Personil that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonilFindUniqueOrThrowArgs} args - Arguments to find a Personil
     * @example
     * // Get one Personil
     * const personil = await prisma.personil.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonilFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonilFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonilClient<$Result.GetResult<Prisma.$PersonilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Personil that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonilFindFirstArgs} args - Arguments to find a Personil
     * @example
     * // Get one Personil
     * const personil = await prisma.personil.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonilFindFirstArgs>(args?: SelectSubset<T, PersonilFindFirstArgs<ExtArgs>>): Prisma__PersonilClient<$Result.GetResult<Prisma.$PersonilPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Personil that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonilFindFirstOrThrowArgs} args - Arguments to find a Personil
     * @example
     * // Get one Personil
     * const personil = await prisma.personil.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonilFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonilFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonilClient<$Result.GetResult<Prisma.$PersonilPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Personils that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonilFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Personils
     * const personils = await prisma.personil.findMany()
     * 
     * // Get first 10 Personils
     * const personils = await prisma.personil.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personilWithIdOnly = await prisma.personil.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PersonilFindManyArgs>(args?: SelectSubset<T, PersonilFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonilPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Personil.
     * @param {PersonilCreateArgs} args - Arguments to create a Personil.
     * @example
     * // Create one Personil
     * const Personil = await prisma.personil.create({
     *   data: {
     *     // ... data to create a Personil
     *   }
     * })
     * 
     */
    create<T extends PersonilCreateArgs>(args: SelectSubset<T, PersonilCreateArgs<ExtArgs>>): Prisma__PersonilClient<$Result.GetResult<Prisma.$PersonilPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Personils.
     * @param {PersonilCreateManyArgs} args - Arguments to create many Personils.
     * @example
     * // Create many Personils
     * const personil = await prisma.personil.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonilCreateManyArgs>(args?: SelectSubset<T, PersonilCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Personils and returns the data saved in the database.
     * @param {PersonilCreateManyAndReturnArgs} args - Arguments to create many Personils.
     * @example
     * // Create many Personils
     * const personil = await prisma.personil.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Personils and only return the `id`
     * const personilWithIdOnly = await prisma.personil.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonilCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonilCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonilPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Personil.
     * @param {PersonilDeleteArgs} args - Arguments to delete one Personil.
     * @example
     * // Delete one Personil
     * const Personil = await prisma.personil.delete({
     *   where: {
     *     // ... filter to delete one Personil
     *   }
     * })
     * 
     */
    delete<T extends PersonilDeleteArgs>(args: SelectSubset<T, PersonilDeleteArgs<ExtArgs>>): Prisma__PersonilClient<$Result.GetResult<Prisma.$PersonilPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Personil.
     * @param {PersonilUpdateArgs} args - Arguments to update one Personil.
     * @example
     * // Update one Personil
     * const personil = await prisma.personil.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonilUpdateArgs>(args: SelectSubset<T, PersonilUpdateArgs<ExtArgs>>): Prisma__PersonilClient<$Result.GetResult<Prisma.$PersonilPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Personils.
     * @param {PersonilDeleteManyArgs} args - Arguments to filter Personils to delete.
     * @example
     * // Delete a few Personils
     * const { count } = await prisma.personil.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonilDeleteManyArgs>(args?: SelectSubset<T, PersonilDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonilUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Personils
     * const personil = await prisma.personil.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonilUpdateManyArgs>(args: SelectSubset<T, PersonilUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personils and returns the data updated in the database.
     * @param {PersonilUpdateManyAndReturnArgs} args - Arguments to update many Personils.
     * @example
     * // Update many Personils
     * const personil = await prisma.personil.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Personils and only return the `id`
     * const personilWithIdOnly = await prisma.personil.updateManyAndReturn({
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
    updateManyAndReturn<T extends PersonilUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonilUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonilPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Personil.
     * @param {PersonilUpsertArgs} args - Arguments to update or create a Personil.
     * @example
     * // Update or create a Personil
     * const personil = await prisma.personil.upsert({
     *   create: {
     *     // ... data to create a Personil
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Personil we want to update
     *   }
     * })
     */
    upsert<T extends PersonilUpsertArgs>(args: SelectSubset<T, PersonilUpsertArgs<ExtArgs>>): Prisma__PersonilClient<$Result.GetResult<Prisma.$PersonilPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Personils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonilCountArgs} args - Arguments to filter Personils to count.
     * @example
     * // Count the number of Personils
     * const count = await prisma.personil.count({
     *   where: {
     *     // ... the filter for the Personils we want to count
     *   }
     * })
    **/
    count<T extends PersonilCountArgs>(
      args?: Subset<T, PersonilCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonilCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Personil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonilAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PersonilAggregateArgs>(args: Subset<T, PersonilAggregateArgs>): Prisma.PrismaPromise<GetPersonilAggregateType<T>>

    /**
     * Group by Personil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonilGroupByArgs} args - Group by arguments.
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
      T extends PersonilGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonilGroupByArgs['orderBy'] }
        : { orderBy?: PersonilGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PersonilGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonilGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Personil model
   */
  readonly fields: PersonilFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Personil.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonilClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    histories<T extends Personil$historiesArgs<ExtArgs> = {}>(args?: Subset<T, Personil$historiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Personil model
   */
  interface PersonilFieldRefs {
    readonly id: FieldRef<"Personil", 'Int'>
    readonly NAMA1: FieldRef<"Personil", 'String'>
    readonly NAMA2: FieldRef<"Personil", 'String'>
    readonly NAMA3: FieldRef<"Personil", 'String'>
    readonly KDPKT: FieldRef<"Personil", 'String'>
    readonly PANGKAT: FieldRef<"Personil", 'String'>
    readonly KORPS: FieldRef<"Personil", 'String'>
    readonly HAR: FieldRef<"Personil", 'String'>
    readonly NRP: FieldRef<"Personil", 'String'>
    readonly KELAHIRAN: FieldRef<"Personil", 'String'>
    readonly JAB1: FieldRef<"Personil", 'String'>
    readonly JAB2: FieldRef<"Personil", 'String'>
    readonly JAB3: FieldRef<"Personil", 'String'>
    readonly JAB4: FieldRef<"Personil", 'String'>
    readonly JAB5: FieldRef<"Personil", 'String'>
    readonly TMTTNI: FieldRef<"Personil", 'String'>
    readonly TGAB: FieldRef<"Personil", 'String'>
    readonly BLAB: FieldRef<"Personil", 'String'>
    readonly THAB: FieldRef<"Personil", 'String'>
    readonly KDSAH: FieldRef<"Personil", 'String'>
    readonly TMTMPP: FieldRef<"Personil", 'String'>
    readonly TGMPP: FieldRef<"Personil", 'String'>
    readonly BLMPP: FieldRef<"Personil", 'String'>
    readonly THMPP: FieldRef<"Personil", 'String'>
    readonly SDTG: FieldRef<"Personil", 'String'>
    readonly SDBL: FieldRef<"Personil", 'String'>
    readonly SDTH: FieldRef<"Personil", 'String'>
    readonly TMTHENTI: FieldRef<"Personil", 'String'>
    readonly TGHT: FieldRef<"Personil", 'String'>
    readonly BLHT: FieldRef<"Personil", 'String'>
    readonly THHT: FieldRef<"Personil", 'String'>
    readonly KET1: FieldRef<"Personil", 'String'>
    readonly KET2: FieldRef<"Personil", 'String'>
    readonly KET3: FieldRef<"Personil", 'String'>
    readonly KET4: FieldRef<"Personil", 'String'>
    readonly KET5: FieldRef<"Personil", 'String'>
    readonly KET6: FieldRef<"Personil", 'String'>
    readonly USUL: FieldRef<"Personil", 'String'>
    readonly FLR: FieldRef<"Personil", 'String'>
    readonly NOSKEP: FieldRef<"Personil", 'String'>
    readonly TGSKEP: FieldRef<"Personil", 'String'>
    readonly KEPPRES: FieldRef<"Personil", 'String'>
    readonly TGKEPP: FieldRef<"Personil", 'String'>
    readonly A: FieldRef<"Personil", 'String'>
    readonly BL: FieldRef<"Personil", 'String'>
    readonly TH: FieldRef<"Personil", 'String'>
    readonly KDM: FieldRef<"Personil", 'String'>
    readonly KEPPANG: FieldRef<"Personil", 'String'>
    readonly TGKEPPANG: FieldRef<"Personil", 'String'>
    readonly TGGAL: FieldRef<"Personil", 'String'>
    readonly BLGAL: FieldRef<"Personil", 'String'>
    readonly BLGAL1: FieldRef<"Personil", 'String'>
    readonly THGAL: FieldRef<"Personil", 'String'>
    readonly createdAt: FieldRef<"Personil", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Personil findUnique
   */
  export type PersonilFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personil
     */
    select?: PersonilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personil
     */
    omit?: PersonilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonilInclude<ExtArgs> | null
    /**
     * Filter, which Personil to fetch.
     */
    where: PersonilWhereUniqueInput
  }

  /**
   * Personil findUniqueOrThrow
   */
  export type PersonilFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personil
     */
    select?: PersonilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personil
     */
    omit?: PersonilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonilInclude<ExtArgs> | null
    /**
     * Filter, which Personil to fetch.
     */
    where: PersonilWhereUniqueInput
  }

  /**
   * Personil findFirst
   */
  export type PersonilFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personil
     */
    select?: PersonilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personil
     */
    omit?: PersonilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonilInclude<ExtArgs> | null
    /**
     * Filter, which Personil to fetch.
     */
    where?: PersonilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personils to fetch.
     */
    orderBy?: PersonilOrderByWithRelationInput | PersonilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Personils.
     */
    cursor?: PersonilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personils.
     */
    distinct?: PersonilScalarFieldEnum | PersonilScalarFieldEnum[]
  }

  /**
   * Personil findFirstOrThrow
   */
  export type PersonilFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personil
     */
    select?: PersonilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personil
     */
    omit?: PersonilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonilInclude<ExtArgs> | null
    /**
     * Filter, which Personil to fetch.
     */
    where?: PersonilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personils to fetch.
     */
    orderBy?: PersonilOrderByWithRelationInput | PersonilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Personils.
     */
    cursor?: PersonilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personils.
     */
    distinct?: PersonilScalarFieldEnum | PersonilScalarFieldEnum[]
  }

  /**
   * Personil findMany
   */
  export type PersonilFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personil
     */
    select?: PersonilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personil
     */
    omit?: PersonilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonilInclude<ExtArgs> | null
    /**
     * Filter, which Personils to fetch.
     */
    where?: PersonilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personils to fetch.
     */
    orderBy?: PersonilOrderByWithRelationInput | PersonilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Personils.
     */
    cursor?: PersonilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personils.
     */
    skip?: number
    distinct?: PersonilScalarFieldEnum | PersonilScalarFieldEnum[]
  }

  /**
   * Personil create
   */
  export type PersonilCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personil
     */
    select?: PersonilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personil
     */
    omit?: PersonilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonilInclude<ExtArgs> | null
    /**
     * The data needed to create a Personil.
     */
    data?: XOR<PersonilCreateInput, PersonilUncheckedCreateInput>
  }

  /**
   * Personil createMany
   */
  export type PersonilCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Personils.
     */
    data: PersonilCreateManyInput | PersonilCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Personil createManyAndReturn
   */
  export type PersonilCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personil
     */
    select?: PersonilSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Personil
     */
    omit?: PersonilOmit<ExtArgs> | null
    /**
     * The data used to create many Personils.
     */
    data: PersonilCreateManyInput | PersonilCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Personil update
   */
  export type PersonilUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personil
     */
    select?: PersonilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personil
     */
    omit?: PersonilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonilInclude<ExtArgs> | null
    /**
     * The data needed to update a Personil.
     */
    data: XOR<PersonilUpdateInput, PersonilUncheckedUpdateInput>
    /**
     * Choose, which Personil to update.
     */
    where: PersonilWhereUniqueInput
  }

  /**
   * Personil updateMany
   */
  export type PersonilUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Personils.
     */
    data: XOR<PersonilUpdateManyMutationInput, PersonilUncheckedUpdateManyInput>
    /**
     * Filter which Personils to update
     */
    where?: PersonilWhereInput
    /**
     * Limit how many Personils to update.
     */
    limit?: number
  }

  /**
   * Personil updateManyAndReturn
   */
  export type PersonilUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personil
     */
    select?: PersonilSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Personil
     */
    omit?: PersonilOmit<ExtArgs> | null
    /**
     * The data used to update Personils.
     */
    data: XOR<PersonilUpdateManyMutationInput, PersonilUncheckedUpdateManyInput>
    /**
     * Filter which Personils to update
     */
    where?: PersonilWhereInput
    /**
     * Limit how many Personils to update.
     */
    limit?: number
  }

  /**
   * Personil upsert
   */
  export type PersonilUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personil
     */
    select?: PersonilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personil
     */
    omit?: PersonilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonilInclude<ExtArgs> | null
    /**
     * The filter to search for the Personil to update in case it exists.
     */
    where: PersonilWhereUniqueInput
    /**
     * In case the Personil found by the `where` argument doesn't exist, create a new Personil with this data.
     */
    create: XOR<PersonilCreateInput, PersonilUncheckedCreateInput>
    /**
     * In case the Personil was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonilUpdateInput, PersonilUncheckedUpdateInput>
  }

  /**
   * Personil delete
   */
  export type PersonilDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personil
     */
    select?: PersonilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personil
     */
    omit?: PersonilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonilInclude<ExtArgs> | null
    /**
     * Filter which Personil to delete.
     */
    where: PersonilWhereUniqueInput
  }

  /**
   * Personil deleteMany
   */
  export type PersonilDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Personils to delete
     */
    where?: PersonilWhereInput
    /**
     * Limit how many Personils to delete.
     */
    limit?: number
  }

  /**
   * Personil.histories
   */
  export type Personil$historiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    where?: HistoryWhereInput
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    cursor?: HistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * Personil without action
   */
  export type PersonilDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personil
     */
    select?: PersonilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personil
     */
    omit?: PersonilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonilInclude<ExtArgs> | null
  }


  /**
   * Model History
   */

  export type AggregateHistory = {
    _count: HistoryCountAggregateOutputType | null
    _avg: HistoryAvgAggregateOutputType | null
    _sum: HistorySumAggregateOutputType | null
    _min: HistoryMinAggregateOutputType | null
    _max: HistoryMaxAggregateOutputType | null
  }

  export type HistoryAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    personilId: number | null
  }

  export type HistorySumAggregateOutputType = {
    id: number | null
    userId: number | null
    personilId: number | null
  }

  export type HistoryMinAggregateOutputType = {
    id: number | null
    userId: number | null
    personilId: number | null
    action: string | null
    detail: string | null
    createdAt: Date | null
  }

  export type HistoryMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    personilId: number | null
    action: string | null
    detail: string | null
    createdAt: Date | null
  }

  export type HistoryCountAggregateOutputType = {
    id: number
    userId: number
    personilId: number
    action: number
    detail: number
    createdAt: number
    _all: number
  }


  export type HistoryAvgAggregateInputType = {
    id?: true
    userId?: true
    personilId?: true
  }

  export type HistorySumAggregateInputType = {
    id?: true
    userId?: true
    personilId?: true
  }

  export type HistoryMinAggregateInputType = {
    id?: true
    userId?: true
    personilId?: true
    action?: true
    detail?: true
    createdAt?: true
  }

  export type HistoryMaxAggregateInputType = {
    id?: true
    userId?: true
    personilId?: true
    action?: true
    detail?: true
    createdAt?: true
  }

  export type HistoryCountAggregateInputType = {
    id?: true
    userId?: true
    personilId?: true
    action?: true
    detail?: true
    createdAt?: true
    _all?: true
  }

  export type HistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which History to aggregate.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Histories
    **/
    _count?: true | HistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoryMaxAggregateInputType
  }

  export type GetHistoryAggregateType<T extends HistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistory[P]>
      : GetScalarType<T[P], AggregateHistory[P]>
  }




  export type HistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryWhereInput
    orderBy?: HistoryOrderByWithAggregationInput | HistoryOrderByWithAggregationInput[]
    by: HistoryScalarFieldEnum[] | HistoryScalarFieldEnum
    having?: HistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoryCountAggregateInputType | true
    _avg?: HistoryAvgAggregateInputType
    _sum?: HistorySumAggregateInputType
    _min?: HistoryMinAggregateInputType
    _max?: HistoryMaxAggregateInputType
  }

  export type HistoryGroupByOutputType = {
    id: number
    userId: number
    personilId: number | null
    action: string
    detail: string | null
    createdAt: Date
    _count: HistoryCountAggregateOutputType | null
    _avg: HistoryAvgAggregateOutputType | null
    _sum: HistorySumAggregateOutputType | null
    _min: HistoryMinAggregateOutputType | null
    _max: HistoryMaxAggregateOutputType | null
  }

  type GetHistoryGroupByPayload<T extends HistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoryGroupByOutputType[P]>
            : GetScalarType<T[P], HistoryGroupByOutputType[P]>
        }
      >
    >


  export type HistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    personilId?: boolean
    action?: boolean
    detail?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    personil?: boolean | History$personilArgs<ExtArgs>
  }, ExtArgs["result"]["history"]>

  export type HistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    personilId?: boolean
    action?: boolean
    detail?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    personil?: boolean | History$personilArgs<ExtArgs>
  }, ExtArgs["result"]["history"]>

  export type HistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    personilId?: boolean
    action?: boolean
    detail?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    personil?: boolean | History$personilArgs<ExtArgs>
  }, ExtArgs["result"]["history"]>

  export type HistorySelectScalar = {
    id?: boolean
    userId?: boolean
    personilId?: boolean
    action?: boolean
    detail?: boolean
    createdAt?: boolean
  }

  export type HistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "personilId" | "action" | "detail" | "createdAt", ExtArgs["result"]["history"]>
  export type HistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    personil?: boolean | History$personilArgs<ExtArgs>
  }
  export type HistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    personil?: boolean | History$personilArgs<ExtArgs>
  }
  export type HistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    personil?: boolean | History$personilArgs<ExtArgs>
  }

  export type $HistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "History"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      personil: Prisma.$PersonilPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      personilId: number | null
      action: string
      detail: string | null
      createdAt: Date
    }, ExtArgs["result"]["history"]>
    composites: {}
  }

  type HistoryGetPayload<S extends boolean | null | undefined | HistoryDefaultArgs> = $Result.GetResult<Prisma.$HistoryPayload, S>

  type HistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistoryCountAggregateInputType | true
    }

  export interface HistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['History'], meta: { name: 'History' } }
    /**
     * Find zero or one History that matches the filter.
     * @param {HistoryFindUniqueArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoryFindUniqueArgs>(args: SelectSubset<T, HistoryFindUniqueArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one History that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistoryFindUniqueOrThrowArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first History that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryFindFirstArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoryFindFirstArgs>(args?: SelectSubset<T, HistoryFindFirstArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first History that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryFindFirstOrThrowArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Histories
     * const histories = await prisma.history.findMany()
     * 
     * // Get first 10 Histories
     * const histories = await prisma.history.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historyWithIdOnly = await prisma.history.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistoryFindManyArgs>(args?: SelectSubset<T, HistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a History.
     * @param {HistoryCreateArgs} args - Arguments to create a History.
     * @example
     * // Create one History
     * const History = await prisma.history.create({
     *   data: {
     *     // ... data to create a History
     *   }
     * })
     * 
     */
    create<T extends HistoryCreateArgs>(args: SelectSubset<T, HistoryCreateArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Histories.
     * @param {HistoryCreateManyArgs} args - Arguments to create many Histories.
     * @example
     * // Create many Histories
     * const history = await prisma.history.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoryCreateManyArgs>(args?: SelectSubset<T, HistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Histories and returns the data saved in the database.
     * @param {HistoryCreateManyAndReturnArgs} args - Arguments to create many Histories.
     * @example
     * // Create many Histories
     * const history = await prisma.history.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Histories and only return the `id`
     * const historyWithIdOnly = await prisma.history.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, HistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a History.
     * @param {HistoryDeleteArgs} args - Arguments to delete one History.
     * @example
     * // Delete one History
     * const History = await prisma.history.delete({
     *   where: {
     *     // ... filter to delete one History
     *   }
     * })
     * 
     */
    delete<T extends HistoryDeleteArgs>(args: SelectSubset<T, HistoryDeleteArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one History.
     * @param {HistoryUpdateArgs} args - Arguments to update one History.
     * @example
     * // Update one History
     * const history = await prisma.history.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoryUpdateArgs>(args: SelectSubset<T, HistoryUpdateArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Histories.
     * @param {HistoryDeleteManyArgs} args - Arguments to filter Histories to delete.
     * @example
     * // Delete a few Histories
     * const { count } = await prisma.history.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoryDeleteManyArgs>(args?: SelectSubset<T, HistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Histories
     * const history = await prisma.history.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoryUpdateManyArgs>(args: SelectSubset<T, HistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Histories and returns the data updated in the database.
     * @param {HistoryUpdateManyAndReturnArgs} args - Arguments to update many Histories.
     * @example
     * // Update many Histories
     * const history = await prisma.history.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Histories and only return the `id`
     * const historyWithIdOnly = await prisma.history.updateManyAndReturn({
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
    updateManyAndReturn<T extends HistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, HistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one History.
     * @param {HistoryUpsertArgs} args - Arguments to update or create a History.
     * @example
     * // Update or create a History
     * const history = await prisma.history.upsert({
     *   create: {
     *     // ... data to create a History
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the History we want to update
     *   }
     * })
     */
    upsert<T extends HistoryUpsertArgs>(args: SelectSubset<T, HistoryUpsertArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryCountArgs} args - Arguments to filter Histories to count.
     * @example
     * // Count the number of Histories
     * const count = await prisma.history.count({
     *   where: {
     *     // ... the filter for the Histories we want to count
     *   }
     * })
    **/
    count<T extends HistoryCountArgs>(
      args?: Subset<T, HistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a History.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HistoryAggregateArgs>(args: Subset<T, HistoryAggregateArgs>): Prisma.PrismaPromise<GetHistoryAggregateType<T>>

    /**
     * Group by History.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryGroupByArgs} args - Group by arguments.
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
      T extends HistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoryGroupByArgs['orderBy'] }
        : { orderBy?: HistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the History model
   */
  readonly fields: HistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for History.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    personil<T extends History$personilArgs<ExtArgs> = {}>(args?: Subset<T, History$personilArgs<ExtArgs>>): Prisma__PersonilClient<$Result.GetResult<Prisma.$PersonilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the History model
   */
  interface HistoryFieldRefs {
    readonly id: FieldRef<"History", 'Int'>
    readonly userId: FieldRef<"History", 'Int'>
    readonly personilId: FieldRef<"History", 'Int'>
    readonly action: FieldRef<"History", 'String'>
    readonly detail: FieldRef<"History", 'String'>
    readonly createdAt: FieldRef<"History", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * History findUnique
   */
  export type HistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where: HistoryWhereUniqueInput
  }

  /**
   * History findUniqueOrThrow
   */
  export type HistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where: HistoryWhereUniqueInput
  }

  /**
   * History findFirst
   */
  export type HistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Histories.
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Histories.
     */
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * History findFirstOrThrow
   */
  export type HistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Histories.
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Histories.
     */
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * History findMany
   */
  export type HistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which Histories to fetch.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Histories.
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * History create
   */
  export type HistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a History.
     */
    data: XOR<HistoryCreateInput, HistoryUncheckedCreateInput>
  }

  /**
   * History createMany
   */
  export type HistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Histories.
     */
    data: HistoryCreateManyInput | HistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * History createManyAndReturn
   */
  export type HistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * The data used to create many Histories.
     */
    data: HistoryCreateManyInput | HistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * History update
   */
  export type HistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a History.
     */
    data: XOR<HistoryUpdateInput, HistoryUncheckedUpdateInput>
    /**
     * Choose, which History to update.
     */
    where: HistoryWhereUniqueInput
  }

  /**
   * History updateMany
   */
  export type HistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Histories.
     */
    data: XOR<HistoryUpdateManyMutationInput, HistoryUncheckedUpdateManyInput>
    /**
     * Filter which Histories to update
     */
    where?: HistoryWhereInput
    /**
     * Limit how many Histories to update.
     */
    limit?: number
  }

  /**
   * History updateManyAndReturn
   */
  export type HistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * The data used to update Histories.
     */
    data: XOR<HistoryUpdateManyMutationInput, HistoryUncheckedUpdateManyInput>
    /**
     * Filter which Histories to update
     */
    where?: HistoryWhereInput
    /**
     * Limit how many Histories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * History upsert
   */
  export type HistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the History to update in case it exists.
     */
    where: HistoryWhereUniqueInput
    /**
     * In case the History found by the `where` argument doesn't exist, create a new History with this data.
     */
    create: XOR<HistoryCreateInput, HistoryUncheckedCreateInput>
    /**
     * In case the History was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoryUpdateInput, HistoryUncheckedUpdateInput>
  }

  /**
   * History delete
   */
  export type HistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter which History to delete.
     */
    where: HistoryWhereUniqueInput
  }

  /**
   * History deleteMany
   */
  export type HistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Histories to delete
     */
    where?: HistoryWhereInput
    /**
     * Limit how many Histories to delete.
     */
    limit?: number
  }

  /**
   * History.personil
   */
  export type History$personilArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personil
     */
    select?: PersonilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personil
     */
    omit?: PersonilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonilInclude<ExtArgs> | null
    where?: PersonilWhereInput
  }

  /**
   * History without action
   */
  export type HistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    otp: 'otp',
    otpExpires: 'otpExpires',
    createdAt: 'createdAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const PersonilScalarFieldEnum: {
    id: 'id',
    NAMA1: 'NAMA1',
    NAMA2: 'NAMA2',
    NAMA3: 'NAMA3',
    KDPKT: 'KDPKT',
    PANGKAT: 'PANGKAT',
    KORPS: 'KORPS',
    HAR: 'HAR',
    NRP: 'NRP',
    KELAHIRAN: 'KELAHIRAN',
    JAB1: 'JAB1',
    JAB2: 'JAB2',
    JAB3: 'JAB3',
    JAB4: 'JAB4',
    JAB5: 'JAB5',
    TMTTNI: 'TMTTNI',
    TGAB: 'TGAB',
    BLAB: 'BLAB',
    THAB: 'THAB',
    KDSAH: 'KDSAH',
    TMTMPP: 'TMTMPP',
    TGMPP: 'TGMPP',
    BLMPP: 'BLMPP',
    THMPP: 'THMPP',
    SDTG: 'SDTG',
    SDBL: 'SDBL',
    SDTH: 'SDTH',
    TMTHENTI: 'TMTHENTI',
    TGHT: 'TGHT',
    BLHT: 'BLHT',
    THHT: 'THHT',
    KET1: 'KET1',
    KET2: 'KET2',
    KET3: 'KET3',
    KET4: 'KET4',
    KET5: 'KET5',
    KET6: 'KET6',
    USUL: 'USUL',
    FLR: 'FLR',
    NOSKEP: 'NOSKEP',
    TGSKEP: 'TGSKEP',
    KEPPRES: 'KEPPRES',
    TGKEPP: 'TGKEPP',
    A: 'A',
    BL: 'BL',
    TH: 'TH',
    KDM: 'KDM',
    KEPPANG: 'KEPPANG',
    TGKEPPANG: 'TGKEPPANG',
    TGGAL: 'TGGAL',
    BLGAL: 'BLGAL',
    BLGAL1: 'BLGAL1',
    THGAL: 'THGAL',
    createdAt: 'createdAt'
  };

  export type PersonilScalarFieldEnum = (typeof PersonilScalarFieldEnum)[keyof typeof PersonilScalarFieldEnum]


  export const HistoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    personilId: 'personilId',
    action: 'action',
    detail: 'detail',
    createdAt: 'createdAt'
  };

  export type HistoryScalarFieldEnum = (typeof HistoryScalarFieldEnum)[keyof typeof HistoryScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    role?: EnumRoleFilter<"Users"> | $Enums.Role
    otp?: StringNullableFilter<"Users"> | string | null
    otpExpires?: DateTimeNullableFilter<"Users"> | Date | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    histories?: HistoryListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    otp?: SortOrderInput | SortOrder
    otpExpires?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    histories?: HistoryOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    role?: EnumRoleFilter<"Users"> | $Enums.Role
    otp?: StringNullableFilter<"Users"> | string | null
    otpExpires?: DateTimeNullableFilter<"Users"> | Date | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    histories?: HistoryListRelationFilter
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    otp?: SortOrderInput | SortOrder
    otpExpires?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    name?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    role?: EnumRoleWithAggregatesFilter<"Users"> | $Enums.Role
    otp?: StringNullableWithAggregatesFilter<"Users"> | string | null
    otpExpires?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type PersonilWhereInput = {
    AND?: PersonilWhereInput | PersonilWhereInput[]
    OR?: PersonilWhereInput[]
    NOT?: PersonilWhereInput | PersonilWhereInput[]
    id?: IntFilter<"Personil"> | number
    NAMA1?: StringNullableFilter<"Personil"> | string | null
    NAMA2?: StringNullableFilter<"Personil"> | string | null
    NAMA3?: StringNullableFilter<"Personil"> | string | null
    KDPKT?: StringNullableFilter<"Personil"> | string | null
    PANGKAT?: StringNullableFilter<"Personil"> | string | null
    KORPS?: StringNullableFilter<"Personil"> | string | null
    HAR?: StringNullableFilter<"Personil"> | string | null
    NRP?: StringNullableFilter<"Personil"> | string | null
    KELAHIRAN?: StringNullableFilter<"Personil"> | string | null
    JAB1?: StringNullableFilter<"Personil"> | string | null
    JAB2?: StringNullableFilter<"Personil"> | string | null
    JAB3?: StringNullableFilter<"Personil"> | string | null
    JAB4?: StringNullableFilter<"Personil"> | string | null
    JAB5?: StringNullableFilter<"Personil"> | string | null
    TMTTNI?: StringNullableFilter<"Personil"> | string | null
    TGAB?: StringNullableFilter<"Personil"> | string | null
    BLAB?: StringNullableFilter<"Personil"> | string | null
    THAB?: StringNullableFilter<"Personil"> | string | null
    KDSAH?: StringNullableFilter<"Personil"> | string | null
    TMTMPP?: StringNullableFilter<"Personil"> | string | null
    TGMPP?: StringNullableFilter<"Personil"> | string | null
    BLMPP?: StringNullableFilter<"Personil"> | string | null
    THMPP?: StringNullableFilter<"Personil"> | string | null
    SDTG?: StringNullableFilter<"Personil"> | string | null
    SDBL?: StringNullableFilter<"Personil"> | string | null
    SDTH?: StringNullableFilter<"Personil"> | string | null
    TMTHENTI?: StringNullableFilter<"Personil"> | string | null
    TGHT?: StringNullableFilter<"Personil"> | string | null
    BLHT?: StringNullableFilter<"Personil"> | string | null
    THHT?: StringNullableFilter<"Personil"> | string | null
    KET1?: StringNullableFilter<"Personil"> | string | null
    KET2?: StringNullableFilter<"Personil"> | string | null
    KET3?: StringNullableFilter<"Personil"> | string | null
    KET4?: StringNullableFilter<"Personil"> | string | null
    KET5?: StringNullableFilter<"Personil"> | string | null
    KET6?: StringNullableFilter<"Personil"> | string | null
    USUL?: StringNullableFilter<"Personil"> | string | null
    FLR?: StringNullableFilter<"Personil"> | string | null
    NOSKEP?: StringNullableFilter<"Personil"> | string | null
    TGSKEP?: StringNullableFilter<"Personil"> | string | null
    KEPPRES?: StringNullableFilter<"Personil"> | string | null
    TGKEPP?: StringNullableFilter<"Personil"> | string | null
    A?: StringNullableFilter<"Personil"> | string | null
    BL?: StringNullableFilter<"Personil"> | string | null
    TH?: StringNullableFilter<"Personil"> | string | null
    KDM?: StringNullableFilter<"Personil"> | string | null
    KEPPANG?: StringNullableFilter<"Personil"> | string | null
    TGKEPPANG?: StringNullableFilter<"Personil"> | string | null
    TGGAL?: StringNullableFilter<"Personil"> | string | null
    BLGAL?: StringNullableFilter<"Personil"> | string | null
    BLGAL1?: StringNullableFilter<"Personil"> | string | null
    THGAL?: StringNullableFilter<"Personil"> | string | null
    createdAt?: DateTimeFilter<"Personil"> | Date | string
    histories?: HistoryListRelationFilter
  }

  export type PersonilOrderByWithRelationInput = {
    id?: SortOrder
    NAMA1?: SortOrderInput | SortOrder
    NAMA2?: SortOrderInput | SortOrder
    NAMA3?: SortOrderInput | SortOrder
    KDPKT?: SortOrderInput | SortOrder
    PANGKAT?: SortOrderInput | SortOrder
    KORPS?: SortOrderInput | SortOrder
    HAR?: SortOrderInput | SortOrder
    NRP?: SortOrderInput | SortOrder
    KELAHIRAN?: SortOrderInput | SortOrder
    JAB1?: SortOrderInput | SortOrder
    JAB2?: SortOrderInput | SortOrder
    JAB3?: SortOrderInput | SortOrder
    JAB4?: SortOrderInput | SortOrder
    JAB5?: SortOrderInput | SortOrder
    TMTTNI?: SortOrderInput | SortOrder
    TGAB?: SortOrderInput | SortOrder
    BLAB?: SortOrderInput | SortOrder
    THAB?: SortOrderInput | SortOrder
    KDSAH?: SortOrderInput | SortOrder
    TMTMPP?: SortOrderInput | SortOrder
    TGMPP?: SortOrderInput | SortOrder
    BLMPP?: SortOrderInput | SortOrder
    THMPP?: SortOrderInput | SortOrder
    SDTG?: SortOrderInput | SortOrder
    SDBL?: SortOrderInput | SortOrder
    SDTH?: SortOrderInput | SortOrder
    TMTHENTI?: SortOrderInput | SortOrder
    TGHT?: SortOrderInput | SortOrder
    BLHT?: SortOrderInput | SortOrder
    THHT?: SortOrderInput | SortOrder
    KET1?: SortOrderInput | SortOrder
    KET2?: SortOrderInput | SortOrder
    KET3?: SortOrderInput | SortOrder
    KET4?: SortOrderInput | SortOrder
    KET5?: SortOrderInput | SortOrder
    KET6?: SortOrderInput | SortOrder
    USUL?: SortOrderInput | SortOrder
    FLR?: SortOrderInput | SortOrder
    NOSKEP?: SortOrderInput | SortOrder
    TGSKEP?: SortOrderInput | SortOrder
    KEPPRES?: SortOrderInput | SortOrder
    TGKEPP?: SortOrderInput | SortOrder
    A?: SortOrderInput | SortOrder
    BL?: SortOrderInput | SortOrder
    TH?: SortOrderInput | SortOrder
    KDM?: SortOrderInput | SortOrder
    KEPPANG?: SortOrderInput | SortOrder
    TGKEPPANG?: SortOrderInput | SortOrder
    TGGAL?: SortOrderInput | SortOrder
    BLGAL?: SortOrderInput | SortOrder
    BLGAL1?: SortOrderInput | SortOrder
    THGAL?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    histories?: HistoryOrderByRelationAggregateInput
  }

  export type PersonilWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    NRP?: string
    AND?: PersonilWhereInput | PersonilWhereInput[]
    OR?: PersonilWhereInput[]
    NOT?: PersonilWhereInput | PersonilWhereInput[]
    NAMA1?: StringNullableFilter<"Personil"> | string | null
    NAMA2?: StringNullableFilter<"Personil"> | string | null
    NAMA3?: StringNullableFilter<"Personil"> | string | null
    KDPKT?: StringNullableFilter<"Personil"> | string | null
    PANGKAT?: StringNullableFilter<"Personil"> | string | null
    KORPS?: StringNullableFilter<"Personil"> | string | null
    HAR?: StringNullableFilter<"Personil"> | string | null
    KELAHIRAN?: StringNullableFilter<"Personil"> | string | null
    JAB1?: StringNullableFilter<"Personil"> | string | null
    JAB2?: StringNullableFilter<"Personil"> | string | null
    JAB3?: StringNullableFilter<"Personil"> | string | null
    JAB4?: StringNullableFilter<"Personil"> | string | null
    JAB5?: StringNullableFilter<"Personil"> | string | null
    TMTTNI?: StringNullableFilter<"Personil"> | string | null
    TGAB?: StringNullableFilter<"Personil"> | string | null
    BLAB?: StringNullableFilter<"Personil"> | string | null
    THAB?: StringNullableFilter<"Personil"> | string | null
    KDSAH?: StringNullableFilter<"Personil"> | string | null
    TMTMPP?: StringNullableFilter<"Personil"> | string | null
    TGMPP?: StringNullableFilter<"Personil"> | string | null
    BLMPP?: StringNullableFilter<"Personil"> | string | null
    THMPP?: StringNullableFilter<"Personil"> | string | null
    SDTG?: StringNullableFilter<"Personil"> | string | null
    SDBL?: StringNullableFilter<"Personil"> | string | null
    SDTH?: StringNullableFilter<"Personil"> | string | null
    TMTHENTI?: StringNullableFilter<"Personil"> | string | null
    TGHT?: StringNullableFilter<"Personil"> | string | null
    BLHT?: StringNullableFilter<"Personil"> | string | null
    THHT?: StringNullableFilter<"Personil"> | string | null
    KET1?: StringNullableFilter<"Personil"> | string | null
    KET2?: StringNullableFilter<"Personil"> | string | null
    KET3?: StringNullableFilter<"Personil"> | string | null
    KET4?: StringNullableFilter<"Personil"> | string | null
    KET5?: StringNullableFilter<"Personil"> | string | null
    KET6?: StringNullableFilter<"Personil"> | string | null
    USUL?: StringNullableFilter<"Personil"> | string | null
    FLR?: StringNullableFilter<"Personil"> | string | null
    NOSKEP?: StringNullableFilter<"Personil"> | string | null
    TGSKEP?: StringNullableFilter<"Personil"> | string | null
    KEPPRES?: StringNullableFilter<"Personil"> | string | null
    TGKEPP?: StringNullableFilter<"Personil"> | string | null
    A?: StringNullableFilter<"Personil"> | string | null
    BL?: StringNullableFilter<"Personil"> | string | null
    TH?: StringNullableFilter<"Personil"> | string | null
    KDM?: StringNullableFilter<"Personil"> | string | null
    KEPPANG?: StringNullableFilter<"Personil"> | string | null
    TGKEPPANG?: StringNullableFilter<"Personil"> | string | null
    TGGAL?: StringNullableFilter<"Personil"> | string | null
    BLGAL?: StringNullableFilter<"Personil"> | string | null
    BLGAL1?: StringNullableFilter<"Personil"> | string | null
    THGAL?: StringNullableFilter<"Personil"> | string | null
    createdAt?: DateTimeFilter<"Personil"> | Date | string
    histories?: HistoryListRelationFilter
  }, "id" | "NRP">

  export type PersonilOrderByWithAggregationInput = {
    id?: SortOrder
    NAMA1?: SortOrderInput | SortOrder
    NAMA2?: SortOrderInput | SortOrder
    NAMA3?: SortOrderInput | SortOrder
    KDPKT?: SortOrderInput | SortOrder
    PANGKAT?: SortOrderInput | SortOrder
    KORPS?: SortOrderInput | SortOrder
    HAR?: SortOrderInput | SortOrder
    NRP?: SortOrderInput | SortOrder
    KELAHIRAN?: SortOrderInput | SortOrder
    JAB1?: SortOrderInput | SortOrder
    JAB2?: SortOrderInput | SortOrder
    JAB3?: SortOrderInput | SortOrder
    JAB4?: SortOrderInput | SortOrder
    JAB5?: SortOrderInput | SortOrder
    TMTTNI?: SortOrderInput | SortOrder
    TGAB?: SortOrderInput | SortOrder
    BLAB?: SortOrderInput | SortOrder
    THAB?: SortOrderInput | SortOrder
    KDSAH?: SortOrderInput | SortOrder
    TMTMPP?: SortOrderInput | SortOrder
    TGMPP?: SortOrderInput | SortOrder
    BLMPP?: SortOrderInput | SortOrder
    THMPP?: SortOrderInput | SortOrder
    SDTG?: SortOrderInput | SortOrder
    SDBL?: SortOrderInput | SortOrder
    SDTH?: SortOrderInput | SortOrder
    TMTHENTI?: SortOrderInput | SortOrder
    TGHT?: SortOrderInput | SortOrder
    BLHT?: SortOrderInput | SortOrder
    THHT?: SortOrderInput | SortOrder
    KET1?: SortOrderInput | SortOrder
    KET2?: SortOrderInput | SortOrder
    KET3?: SortOrderInput | SortOrder
    KET4?: SortOrderInput | SortOrder
    KET5?: SortOrderInput | SortOrder
    KET6?: SortOrderInput | SortOrder
    USUL?: SortOrderInput | SortOrder
    FLR?: SortOrderInput | SortOrder
    NOSKEP?: SortOrderInput | SortOrder
    TGSKEP?: SortOrderInput | SortOrder
    KEPPRES?: SortOrderInput | SortOrder
    TGKEPP?: SortOrderInput | SortOrder
    A?: SortOrderInput | SortOrder
    BL?: SortOrderInput | SortOrder
    TH?: SortOrderInput | SortOrder
    KDM?: SortOrderInput | SortOrder
    KEPPANG?: SortOrderInput | SortOrder
    TGKEPPANG?: SortOrderInput | SortOrder
    TGGAL?: SortOrderInput | SortOrder
    BLGAL?: SortOrderInput | SortOrder
    BLGAL1?: SortOrderInput | SortOrder
    THGAL?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PersonilCountOrderByAggregateInput
    _avg?: PersonilAvgOrderByAggregateInput
    _max?: PersonilMaxOrderByAggregateInput
    _min?: PersonilMinOrderByAggregateInput
    _sum?: PersonilSumOrderByAggregateInput
  }

  export type PersonilScalarWhereWithAggregatesInput = {
    AND?: PersonilScalarWhereWithAggregatesInput | PersonilScalarWhereWithAggregatesInput[]
    OR?: PersonilScalarWhereWithAggregatesInput[]
    NOT?: PersonilScalarWhereWithAggregatesInput | PersonilScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Personil"> | number
    NAMA1?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    NAMA2?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    NAMA3?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    KDPKT?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    PANGKAT?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    KORPS?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    HAR?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    NRP?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    KELAHIRAN?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    JAB1?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    JAB2?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    JAB3?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    JAB4?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    JAB5?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    TMTTNI?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    TGAB?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    BLAB?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    THAB?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    KDSAH?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    TMTMPP?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    TGMPP?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    BLMPP?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    THMPP?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    SDTG?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    SDBL?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    SDTH?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    TMTHENTI?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    TGHT?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    BLHT?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    THHT?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    KET1?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    KET2?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    KET3?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    KET4?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    KET5?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    KET6?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    USUL?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    FLR?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    NOSKEP?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    TGSKEP?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    KEPPRES?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    TGKEPP?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    A?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    BL?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    TH?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    KDM?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    KEPPANG?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    TGKEPPANG?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    TGGAL?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    BLGAL?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    BLGAL1?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    THGAL?: StringNullableWithAggregatesFilter<"Personil"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Personil"> | Date | string
  }

  export type HistoryWhereInput = {
    AND?: HistoryWhereInput | HistoryWhereInput[]
    OR?: HistoryWhereInput[]
    NOT?: HistoryWhereInput | HistoryWhereInput[]
    id?: IntFilter<"History"> | number
    userId?: IntFilter<"History"> | number
    personilId?: IntNullableFilter<"History"> | number | null
    action?: StringFilter<"History"> | string
    detail?: StringNullableFilter<"History"> | string | null
    createdAt?: DateTimeFilter<"History"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    personil?: XOR<PersonilNullableScalarRelationFilter, PersonilWhereInput> | null
  }

  export type HistoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    personilId?: SortOrderInput | SortOrder
    action?: SortOrder
    detail?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UsersOrderByWithRelationInput
    personil?: PersonilOrderByWithRelationInput
  }

  export type HistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HistoryWhereInput | HistoryWhereInput[]
    OR?: HistoryWhereInput[]
    NOT?: HistoryWhereInput | HistoryWhereInput[]
    userId?: IntFilter<"History"> | number
    personilId?: IntNullableFilter<"History"> | number | null
    action?: StringFilter<"History"> | string
    detail?: StringNullableFilter<"History"> | string | null
    createdAt?: DateTimeFilter<"History"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    personil?: XOR<PersonilNullableScalarRelationFilter, PersonilWhereInput> | null
  }, "id">

  export type HistoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    personilId?: SortOrderInput | SortOrder
    action?: SortOrder
    detail?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: HistoryCountOrderByAggregateInput
    _avg?: HistoryAvgOrderByAggregateInput
    _max?: HistoryMaxOrderByAggregateInput
    _min?: HistoryMinOrderByAggregateInput
    _sum?: HistorySumOrderByAggregateInput
  }

  export type HistoryScalarWhereWithAggregatesInput = {
    AND?: HistoryScalarWhereWithAggregatesInput | HistoryScalarWhereWithAggregatesInput[]
    OR?: HistoryScalarWhereWithAggregatesInput[]
    NOT?: HistoryScalarWhereWithAggregatesInput | HistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"History"> | number
    userId?: IntWithAggregatesFilter<"History"> | number
    personilId?: IntNullableWithAggregatesFilter<"History"> | number | null
    action?: StringWithAggregatesFilter<"History"> | string
    detail?: StringNullableWithAggregatesFilter<"History"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"History"> | Date | string
  }

  export type UsersCreateInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    otp?: string | null
    otpExpires?: Date | string | null
    createdAt?: Date | string
    histories?: HistoryCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    otp?: string | null
    otpExpires?: Date | string | null
    createdAt?: Date | string
    histories?: HistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    histories?: HistoryUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    histories?: HistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    otp?: string | null
    otpExpires?: Date | string | null
    createdAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonilCreateInput = {
    NAMA1?: string | null
    NAMA2?: string | null
    NAMA3?: string | null
    KDPKT?: string | null
    PANGKAT?: string | null
    KORPS?: string | null
    HAR?: string | null
    NRP?: string | null
    KELAHIRAN?: string | null
    JAB1?: string | null
    JAB2?: string | null
    JAB3?: string | null
    JAB4?: string | null
    JAB5?: string | null
    TMTTNI?: string | null
    TGAB?: string | null
    BLAB?: string | null
    THAB?: string | null
    KDSAH?: string | null
    TMTMPP?: string | null
    TGMPP?: string | null
    BLMPP?: string | null
    THMPP?: string | null
    SDTG?: string | null
    SDBL?: string | null
    SDTH?: string | null
    TMTHENTI?: string | null
    TGHT?: string | null
    BLHT?: string | null
    THHT?: string | null
    KET1?: string | null
    KET2?: string | null
    KET3?: string | null
    KET4?: string | null
    KET5?: string | null
    KET6?: string | null
    USUL?: string | null
    FLR?: string | null
    NOSKEP?: string | null
    TGSKEP?: string | null
    KEPPRES?: string | null
    TGKEPP?: string | null
    A?: string | null
    BL?: string | null
    TH?: string | null
    KDM?: string | null
    KEPPANG?: string | null
    TGKEPPANG?: string | null
    TGGAL?: string | null
    BLGAL?: string | null
    BLGAL1?: string | null
    THGAL?: string | null
    createdAt?: Date | string
    histories?: HistoryCreateNestedManyWithoutPersonilInput
  }

  export type PersonilUncheckedCreateInput = {
    id?: number
    NAMA1?: string | null
    NAMA2?: string | null
    NAMA3?: string | null
    KDPKT?: string | null
    PANGKAT?: string | null
    KORPS?: string | null
    HAR?: string | null
    NRP?: string | null
    KELAHIRAN?: string | null
    JAB1?: string | null
    JAB2?: string | null
    JAB3?: string | null
    JAB4?: string | null
    JAB5?: string | null
    TMTTNI?: string | null
    TGAB?: string | null
    BLAB?: string | null
    THAB?: string | null
    KDSAH?: string | null
    TMTMPP?: string | null
    TGMPP?: string | null
    BLMPP?: string | null
    THMPP?: string | null
    SDTG?: string | null
    SDBL?: string | null
    SDTH?: string | null
    TMTHENTI?: string | null
    TGHT?: string | null
    BLHT?: string | null
    THHT?: string | null
    KET1?: string | null
    KET2?: string | null
    KET3?: string | null
    KET4?: string | null
    KET5?: string | null
    KET6?: string | null
    USUL?: string | null
    FLR?: string | null
    NOSKEP?: string | null
    TGSKEP?: string | null
    KEPPRES?: string | null
    TGKEPP?: string | null
    A?: string | null
    BL?: string | null
    TH?: string | null
    KDM?: string | null
    KEPPANG?: string | null
    TGKEPPANG?: string | null
    TGGAL?: string | null
    BLGAL?: string | null
    BLGAL1?: string | null
    THGAL?: string | null
    createdAt?: Date | string
    histories?: HistoryUncheckedCreateNestedManyWithoutPersonilInput
  }

  export type PersonilUpdateInput = {
    NAMA1?: NullableStringFieldUpdateOperationsInput | string | null
    NAMA2?: NullableStringFieldUpdateOperationsInput | string | null
    NAMA3?: NullableStringFieldUpdateOperationsInput | string | null
    KDPKT?: NullableStringFieldUpdateOperationsInput | string | null
    PANGKAT?: NullableStringFieldUpdateOperationsInput | string | null
    KORPS?: NullableStringFieldUpdateOperationsInput | string | null
    HAR?: NullableStringFieldUpdateOperationsInput | string | null
    NRP?: NullableStringFieldUpdateOperationsInput | string | null
    KELAHIRAN?: NullableStringFieldUpdateOperationsInput | string | null
    JAB1?: NullableStringFieldUpdateOperationsInput | string | null
    JAB2?: NullableStringFieldUpdateOperationsInput | string | null
    JAB3?: NullableStringFieldUpdateOperationsInput | string | null
    JAB4?: NullableStringFieldUpdateOperationsInput | string | null
    JAB5?: NullableStringFieldUpdateOperationsInput | string | null
    TMTTNI?: NullableStringFieldUpdateOperationsInput | string | null
    TGAB?: NullableStringFieldUpdateOperationsInput | string | null
    BLAB?: NullableStringFieldUpdateOperationsInput | string | null
    THAB?: NullableStringFieldUpdateOperationsInput | string | null
    KDSAH?: NullableStringFieldUpdateOperationsInput | string | null
    TMTMPP?: NullableStringFieldUpdateOperationsInput | string | null
    TGMPP?: NullableStringFieldUpdateOperationsInput | string | null
    BLMPP?: NullableStringFieldUpdateOperationsInput | string | null
    THMPP?: NullableStringFieldUpdateOperationsInput | string | null
    SDTG?: NullableStringFieldUpdateOperationsInput | string | null
    SDBL?: NullableStringFieldUpdateOperationsInput | string | null
    SDTH?: NullableStringFieldUpdateOperationsInput | string | null
    TMTHENTI?: NullableStringFieldUpdateOperationsInput | string | null
    TGHT?: NullableStringFieldUpdateOperationsInput | string | null
    BLHT?: NullableStringFieldUpdateOperationsInput | string | null
    THHT?: NullableStringFieldUpdateOperationsInput | string | null
    KET1?: NullableStringFieldUpdateOperationsInput | string | null
    KET2?: NullableStringFieldUpdateOperationsInput | string | null
    KET3?: NullableStringFieldUpdateOperationsInput | string | null
    KET4?: NullableStringFieldUpdateOperationsInput | string | null
    KET5?: NullableStringFieldUpdateOperationsInput | string | null
    KET6?: NullableStringFieldUpdateOperationsInput | string | null
    USUL?: NullableStringFieldUpdateOperationsInput | string | null
    FLR?: NullableStringFieldUpdateOperationsInput | string | null
    NOSKEP?: NullableStringFieldUpdateOperationsInput | string | null
    TGSKEP?: NullableStringFieldUpdateOperationsInput | string | null
    KEPPRES?: NullableStringFieldUpdateOperationsInput | string | null
    TGKEPP?: NullableStringFieldUpdateOperationsInput | string | null
    A?: NullableStringFieldUpdateOperationsInput | string | null
    BL?: NullableStringFieldUpdateOperationsInput | string | null
    TH?: NullableStringFieldUpdateOperationsInput | string | null
    KDM?: NullableStringFieldUpdateOperationsInput | string | null
    KEPPANG?: NullableStringFieldUpdateOperationsInput | string | null
    TGKEPPANG?: NullableStringFieldUpdateOperationsInput | string | null
    TGGAL?: NullableStringFieldUpdateOperationsInput | string | null
    BLGAL?: NullableStringFieldUpdateOperationsInput | string | null
    BLGAL1?: NullableStringFieldUpdateOperationsInput | string | null
    THGAL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    histories?: HistoryUpdateManyWithoutPersonilNestedInput
  }

  export type PersonilUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    NAMA1?: NullableStringFieldUpdateOperationsInput | string | null
    NAMA2?: NullableStringFieldUpdateOperationsInput | string | null
    NAMA3?: NullableStringFieldUpdateOperationsInput | string | null
    KDPKT?: NullableStringFieldUpdateOperationsInput | string | null
    PANGKAT?: NullableStringFieldUpdateOperationsInput | string | null
    KORPS?: NullableStringFieldUpdateOperationsInput | string | null
    HAR?: NullableStringFieldUpdateOperationsInput | string | null
    NRP?: NullableStringFieldUpdateOperationsInput | string | null
    KELAHIRAN?: NullableStringFieldUpdateOperationsInput | string | null
    JAB1?: NullableStringFieldUpdateOperationsInput | string | null
    JAB2?: NullableStringFieldUpdateOperationsInput | string | null
    JAB3?: NullableStringFieldUpdateOperationsInput | string | null
    JAB4?: NullableStringFieldUpdateOperationsInput | string | null
    JAB5?: NullableStringFieldUpdateOperationsInput | string | null
    TMTTNI?: NullableStringFieldUpdateOperationsInput | string | null
    TGAB?: NullableStringFieldUpdateOperationsInput | string | null
    BLAB?: NullableStringFieldUpdateOperationsInput | string | null
    THAB?: NullableStringFieldUpdateOperationsInput | string | null
    KDSAH?: NullableStringFieldUpdateOperationsInput | string | null
    TMTMPP?: NullableStringFieldUpdateOperationsInput | string | null
    TGMPP?: NullableStringFieldUpdateOperationsInput | string | null
    BLMPP?: NullableStringFieldUpdateOperationsInput | string | null
    THMPP?: NullableStringFieldUpdateOperationsInput | string | null
    SDTG?: NullableStringFieldUpdateOperationsInput | string | null
    SDBL?: NullableStringFieldUpdateOperationsInput | string | null
    SDTH?: NullableStringFieldUpdateOperationsInput | string | null
    TMTHENTI?: NullableStringFieldUpdateOperationsInput | string | null
    TGHT?: NullableStringFieldUpdateOperationsInput | string | null
    BLHT?: NullableStringFieldUpdateOperationsInput | string | null
    THHT?: NullableStringFieldUpdateOperationsInput | string | null
    KET1?: NullableStringFieldUpdateOperationsInput | string | null
    KET2?: NullableStringFieldUpdateOperationsInput | string | null
    KET3?: NullableStringFieldUpdateOperationsInput | string | null
    KET4?: NullableStringFieldUpdateOperationsInput | string | null
    KET5?: NullableStringFieldUpdateOperationsInput | string | null
    KET6?: NullableStringFieldUpdateOperationsInput | string | null
    USUL?: NullableStringFieldUpdateOperationsInput | string | null
    FLR?: NullableStringFieldUpdateOperationsInput | string | null
    NOSKEP?: NullableStringFieldUpdateOperationsInput | string | null
    TGSKEP?: NullableStringFieldUpdateOperationsInput | string | null
    KEPPRES?: NullableStringFieldUpdateOperationsInput | string | null
    TGKEPP?: NullableStringFieldUpdateOperationsInput | string | null
    A?: NullableStringFieldUpdateOperationsInput | string | null
    BL?: NullableStringFieldUpdateOperationsInput | string | null
    TH?: NullableStringFieldUpdateOperationsInput | string | null
    KDM?: NullableStringFieldUpdateOperationsInput | string | null
    KEPPANG?: NullableStringFieldUpdateOperationsInput | string | null
    TGKEPPANG?: NullableStringFieldUpdateOperationsInput | string | null
    TGGAL?: NullableStringFieldUpdateOperationsInput | string | null
    BLGAL?: NullableStringFieldUpdateOperationsInput | string | null
    BLGAL1?: NullableStringFieldUpdateOperationsInput | string | null
    THGAL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    histories?: HistoryUncheckedUpdateManyWithoutPersonilNestedInput
  }

  export type PersonilCreateManyInput = {
    id?: number
    NAMA1?: string | null
    NAMA2?: string | null
    NAMA3?: string | null
    KDPKT?: string | null
    PANGKAT?: string | null
    KORPS?: string | null
    HAR?: string | null
    NRP?: string | null
    KELAHIRAN?: string | null
    JAB1?: string | null
    JAB2?: string | null
    JAB3?: string | null
    JAB4?: string | null
    JAB5?: string | null
    TMTTNI?: string | null
    TGAB?: string | null
    BLAB?: string | null
    THAB?: string | null
    KDSAH?: string | null
    TMTMPP?: string | null
    TGMPP?: string | null
    BLMPP?: string | null
    THMPP?: string | null
    SDTG?: string | null
    SDBL?: string | null
    SDTH?: string | null
    TMTHENTI?: string | null
    TGHT?: string | null
    BLHT?: string | null
    THHT?: string | null
    KET1?: string | null
    KET2?: string | null
    KET3?: string | null
    KET4?: string | null
    KET5?: string | null
    KET6?: string | null
    USUL?: string | null
    FLR?: string | null
    NOSKEP?: string | null
    TGSKEP?: string | null
    KEPPRES?: string | null
    TGKEPP?: string | null
    A?: string | null
    BL?: string | null
    TH?: string | null
    KDM?: string | null
    KEPPANG?: string | null
    TGKEPPANG?: string | null
    TGGAL?: string | null
    BLGAL?: string | null
    BLGAL1?: string | null
    THGAL?: string | null
    createdAt?: Date | string
  }

  export type PersonilUpdateManyMutationInput = {
    NAMA1?: NullableStringFieldUpdateOperationsInput | string | null
    NAMA2?: NullableStringFieldUpdateOperationsInput | string | null
    NAMA3?: NullableStringFieldUpdateOperationsInput | string | null
    KDPKT?: NullableStringFieldUpdateOperationsInput | string | null
    PANGKAT?: NullableStringFieldUpdateOperationsInput | string | null
    KORPS?: NullableStringFieldUpdateOperationsInput | string | null
    HAR?: NullableStringFieldUpdateOperationsInput | string | null
    NRP?: NullableStringFieldUpdateOperationsInput | string | null
    KELAHIRAN?: NullableStringFieldUpdateOperationsInput | string | null
    JAB1?: NullableStringFieldUpdateOperationsInput | string | null
    JAB2?: NullableStringFieldUpdateOperationsInput | string | null
    JAB3?: NullableStringFieldUpdateOperationsInput | string | null
    JAB4?: NullableStringFieldUpdateOperationsInput | string | null
    JAB5?: NullableStringFieldUpdateOperationsInput | string | null
    TMTTNI?: NullableStringFieldUpdateOperationsInput | string | null
    TGAB?: NullableStringFieldUpdateOperationsInput | string | null
    BLAB?: NullableStringFieldUpdateOperationsInput | string | null
    THAB?: NullableStringFieldUpdateOperationsInput | string | null
    KDSAH?: NullableStringFieldUpdateOperationsInput | string | null
    TMTMPP?: NullableStringFieldUpdateOperationsInput | string | null
    TGMPP?: NullableStringFieldUpdateOperationsInput | string | null
    BLMPP?: NullableStringFieldUpdateOperationsInput | string | null
    THMPP?: NullableStringFieldUpdateOperationsInput | string | null
    SDTG?: NullableStringFieldUpdateOperationsInput | string | null
    SDBL?: NullableStringFieldUpdateOperationsInput | string | null
    SDTH?: NullableStringFieldUpdateOperationsInput | string | null
    TMTHENTI?: NullableStringFieldUpdateOperationsInput | string | null
    TGHT?: NullableStringFieldUpdateOperationsInput | string | null
    BLHT?: NullableStringFieldUpdateOperationsInput | string | null
    THHT?: NullableStringFieldUpdateOperationsInput | string | null
    KET1?: NullableStringFieldUpdateOperationsInput | string | null
    KET2?: NullableStringFieldUpdateOperationsInput | string | null
    KET3?: NullableStringFieldUpdateOperationsInput | string | null
    KET4?: NullableStringFieldUpdateOperationsInput | string | null
    KET5?: NullableStringFieldUpdateOperationsInput | string | null
    KET6?: NullableStringFieldUpdateOperationsInput | string | null
    USUL?: NullableStringFieldUpdateOperationsInput | string | null
    FLR?: NullableStringFieldUpdateOperationsInput | string | null
    NOSKEP?: NullableStringFieldUpdateOperationsInput | string | null
    TGSKEP?: NullableStringFieldUpdateOperationsInput | string | null
    KEPPRES?: NullableStringFieldUpdateOperationsInput | string | null
    TGKEPP?: NullableStringFieldUpdateOperationsInput | string | null
    A?: NullableStringFieldUpdateOperationsInput | string | null
    BL?: NullableStringFieldUpdateOperationsInput | string | null
    TH?: NullableStringFieldUpdateOperationsInput | string | null
    KDM?: NullableStringFieldUpdateOperationsInput | string | null
    KEPPANG?: NullableStringFieldUpdateOperationsInput | string | null
    TGKEPPANG?: NullableStringFieldUpdateOperationsInput | string | null
    TGGAL?: NullableStringFieldUpdateOperationsInput | string | null
    BLGAL?: NullableStringFieldUpdateOperationsInput | string | null
    BLGAL1?: NullableStringFieldUpdateOperationsInput | string | null
    THGAL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonilUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    NAMA1?: NullableStringFieldUpdateOperationsInput | string | null
    NAMA2?: NullableStringFieldUpdateOperationsInput | string | null
    NAMA3?: NullableStringFieldUpdateOperationsInput | string | null
    KDPKT?: NullableStringFieldUpdateOperationsInput | string | null
    PANGKAT?: NullableStringFieldUpdateOperationsInput | string | null
    KORPS?: NullableStringFieldUpdateOperationsInput | string | null
    HAR?: NullableStringFieldUpdateOperationsInput | string | null
    NRP?: NullableStringFieldUpdateOperationsInput | string | null
    KELAHIRAN?: NullableStringFieldUpdateOperationsInput | string | null
    JAB1?: NullableStringFieldUpdateOperationsInput | string | null
    JAB2?: NullableStringFieldUpdateOperationsInput | string | null
    JAB3?: NullableStringFieldUpdateOperationsInput | string | null
    JAB4?: NullableStringFieldUpdateOperationsInput | string | null
    JAB5?: NullableStringFieldUpdateOperationsInput | string | null
    TMTTNI?: NullableStringFieldUpdateOperationsInput | string | null
    TGAB?: NullableStringFieldUpdateOperationsInput | string | null
    BLAB?: NullableStringFieldUpdateOperationsInput | string | null
    THAB?: NullableStringFieldUpdateOperationsInput | string | null
    KDSAH?: NullableStringFieldUpdateOperationsInput | string | null
    TMTMPP?: NullableStringFieldUpdateOperationsInput | string | null
    TGMPP?: NullableStringFieldUpdateOperationsInput | string | null
    BLMPP?: NullableStringFieldUpdateOperationsInput | string | null
    THMPP?: NullableStringFieldUpdateOperationsInput | string | null
    SDTG?: NullableStringFieldUpdateOperationsInput | string | null
    SDBL?: NullableStringFieldUpdateOperationsInput | string | null
    SDTH?: NullableStringFieldUpdateOperationsInput | string | null
    TMTHENTI?: NullableStringFieldUpdateOperationsInput | string | null
    TGHT?: NullableStringFieldUpdateOperationsInput | string | null
    BLHT?: NullableStringFieldUpdateOperationsInput | string | null
    THHT?: NullableStringFieldUpdateOperationsInput | string | null
    KET1?: NullableStringFieldUpdateOperationsInput | string | null
    KET2?: NullableStringFieldUpdateOperationsInput | string | null
    KET3?: NullableStringFieldUpdateOperationsInput | string | null
    KET4?: NullableStringFieldUpdateOperationsInput | string | null
    KET5?: NullableStringFieldUpdateOperationsInput | string | null
    KET6?: NullableStringFieldUpdateOperationsInput | string | null
    USUL?: NullableStringFieldUpdateOperationsInput | string | null
    FLR?: NullableStringFieldUpdateOperationsInput | string | null
    NOSKEP?: NullableStringFieldUpdateOperationsInput | string | null
    TGSKEP?: NullableStringFieldUpdateOperationsInput | string | null
    KEPPRES?: NullableStringFieldUpdateOperationsInput | string | null
    TGKEPP?: NullableStringFieldUpdateOperationsInput | string | null
    A?: NullableStringFieldUpdateOperationsInput | string | null
    BL?: NullableStringFieldUpdateOperationsInput | string | null
    TH?: NullableStringFieldUpdateOperationsInput | string | null
    KDM?: NullableStringFieldUpdateOperationsInput | string | null
    KEPPANG?: NullableStringFieldUpdateOperationsInput | string | null
    TGKEPPANG?: NullableStringFieldUpdateOperationsInput | string | null
    TGGAL?: NullableStringFieldUpdateOperationsInput | string | null
    BLGAL?: NullableStringFieldUpdateOperationsInput | string | null
    BLGAL1?: NullableStringFieldUpdateOperationsInput | string | null
    THGAL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryCreateInput = {
    action: string
    detail?: string | null
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutHistoriesInput
    personil?: PersonilCreateNestedOneWithoutHistoriesInput
  }

  export type HistoryUncheckedCreateInput = {
    id?: number
    userId: number
    personilId?: number | null
    action: string
    detail?: string | null
    createdAt?: Date | string
  }

  export type HistoryUpdateInput = {
    action?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutHistoriesNestedInput
    personil?: PersonilUpdateOneWithoutHistoriesNestedInput
  }

  export type HistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    personilId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryCreateManyInput = {
    id?: number
    userId: number
    personilId?: number | null
    action: string
    detail?: string | null
    createdAt?: Date | string
  }

  export type HistoryUpdateManyMutationInput = {
    action?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    personilId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type HistoryListRelationFilter = {
    every?: HistoryWhereInput
    some?: HistoryWhereInput
    none?: HistoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type HistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    otp?: SortOrder
    otpExpires?: SortOrder
    createdAt?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    otp?: SortOrder
    otpExpires?: SortOrder
    createdAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    otp?: SortOrder
    otpExpires?: SortOrder
    createdAt?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type PersonilCountOrderByAggregateInput = {
    id?: SortOrder
    NAMA1?: SortOrder
    NAMA2?: SortOrder
    NAMA3?: SortOrder
    KDPKT?: SortOrder
    PANGKAT?: SortOrder
    KORPS?: SortOrder
    HAR?: SortOrder
    NRP?: SortOrder
    KELAHIRAN?: SortOrder
    JAB1?: SortOrder
    JAB2?: SortOrder
    JAB3?: SortOrder
    JAB4?: SortOrder
    JAB5?: SortOrder
    TMTTNI?: SortOrder
    TGAB?: SortOrder
    BLAB?: SortOrder
    THAB?: SortOrder
    KDSAH?: SortOrder
    TMTMPP?: SortOrder
    TGMPP?: SortOrder
    BLMPP?: SortOrder
    THMPP?: SortOrder
    SDTG?: SortOrder
    SDBL?: SortOrder
    SDTH?: SortOrder
    TMTHENTI?: SortOrder
    TGHT?: SortOrder
    BLHT?: SortOrder
    THHT?: SortOrder
    KET1?: SortOrder
    KET2?: SortOrder
    KET3?: SortOrder
    KET4?: SortOrder
    KET5?: SortOrder
    KET6?: SortOrder
    USUL?: SortOrder
    FLR?: SortOrder
    NOSKEP?: SortOrder
    TGSKEP?: SortOrder
    KEPPRES?: SortOrder
    TGKEPP?: SortOrder
    A?: SortOrder
    BL?: SortOrder
    TH?: SortOrder
    KDM?: SortOrder
    KEPPANG?: SortOrder
    TGKEPPANG?: SortOrder
    TGGAL?: SortOrder
    BLGAL?: SortOrder
    BLGAL1?: SortOrder
    THGAL?: SortOrder
    createdAt?: SortOrder
  }

  export type PersonilAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PersonilMaxOrderByAggregateInput = {
    id?: SortOrder
    NAMA1?: SortOrder
    NAMA2?: SortOrder
    NAMA3?: SortOrder
    KDPKT?: SortOrder
    PANGKAT?: SortOrder
    KORPS?: SortOrder
    HAR?: SortOrder
    NRP?: SortOrder
    KELAHIRAN?: SortOrder
    JAB1?: SortOrder
    JAB2?: SortOrder
    JAB3?: SortOrder
    JAB4?: SortOrder
    JAB5?: SortOrder
    TMTTNI?: SortOrder
    TGAB?: SortOrder
    BLAB?: SortOrder
    THAB?: SortOrder
    KDSAH?: SortOrder
    TMTMPP?: SortOrder
    TGMPP?: SortOrder
    BLMPP?: SortOrder
    THMPP?: SortOrder
    SDTG?: SortOrder
    SDBL?: SortOrder
    SDTH?: SortOrder
    TMTHENTI?: SortOrder
    TGHT?: SortOrder
    BLHT?: SortOrder
    THHT?: SortOrder
    KET1?: SortOrder
    KET2?: SortOrder
    KET3?: SortOrder
    KET4?: SortOrder
    KET5?: SortOrder
    KET6?: SortOrder
    USUL?: SortOrder
    FLR?: SortOrder
    NOSKEP?: SortOrder
    TGSKEP?: SortOrder
    KEPPRES?: SortOrder
    TGKEPP?: SortOrder
    A?: SortOrder
    BL?: SortOrder
    TH?: SortOrder
    KDM?: SortOrder
    KEPPANG?: SortOrder
    TGKEPPANG?: SortOrder
    TGGAL?: SortOrder
    BLGAL?: SortOrder
    BLGAL1?: SortOrder
    THGAL?: SortOrder
    createdAt?: SortOrder
  }

  export type PersonilMinOrderByAggregateInput = {
    id?: SortOrder
    NAMA1?: SortOrder
    NAMA2?: SortOrder
    NAMA3?: SortOrder
    KDPKT?: SortOrder
    PANGKAT?: SortOrder
    KORPS?: SortOrder
    HAR?: SortOrder
    NRP?: SortOrder
    KELAHIRAN?: SortOrder
    JAB1?: SortOrder
    JAB2?: SortOrder
    JAB3?: SortOrder
    JAB4?: SortOrder
    JAB5?: SortOrder
    TMTTNI?: SortOrder
    TGAB?: SortOrder
    BLAB?: SortOrder
    THAB?: SortOrder
    KDSAH?: SortOrder
    TMTMPP?: SortOrder
    TGMPP?: SortOrder
    BLMPP?: SortOrder
    THMPP?: SortOrder
    SDTG?: SortOrder
    SDBL?: SortOrder
    SDTH?: SortOrder
    TMTHENTI?: SortOrder
    TGHT?: SortOrder
    BLHT?: SortOrder
    THHT?: SortOrder
    KET1?: SortOrder
    KET2?: SortOrder
    KET3?: SortOrder
    KET4?: SortOrder
    KET5?: SortOrder
    KET6?: SortOrder
    USUL?: SortOrder
    FLR?: SortOrder
    NOSKEP?: SortOrder
    TGSKEP?: SortOrder
    KEPPRES?: SortOrder
    TGKEPP?: SortOrder
    A?: SortOrder
    BL?: SortOrder
    TH?: SortOrder
    KDM?: SortOrder
    KEPPANG?: SortOrder
    TGKEPPANG?: SortOrder
    TGGAL?: SortOrder
    BLGAL?: SortOrder
    BLGAL1?: SortOrder
    THGAL?: SortOrder
    createdAt?: SortOrder
  }

  export type PersonilSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type PersonilNullableScalarRelationFilter = {
    is?: PersonilWhereInput | null
    isNot?: PersonilWhereInput | null
  }

  export type HistoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    personilId?: SortOrder
    action?: SortOrder
    detail?: SortOrder
    createdAt?: SortOrder
  }

  export type HistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    personilId?: SortOrder
  }

  export type HistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    personilId?: SortOrder
    action?: SortOrder
    detail?: SortOrder
    createdAt?: SortOrder
  }

  export type HistoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    personilId?: SortOrder
    action?: SortOrder
    detail?: SortOrder
    createdAt?: SortOrder
  }

  export type HistorySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    personilId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type HistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<HistoryCreateWithoutUserInput, HistoryUncheckedCreateWithoutUserInput> | HistoryCreateWithoutUserInput[] | HistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutUserInput | HistoryCreateOrConnectWithoutUserInput[]
    createMany?: HistoryCreateManyUserInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type HistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HistoryCreateWithoutUserInput, HistoryUncheckedCreateWithoutUserInput> | HistoryCreateWithoutUserInput[] | HistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutUserInput | HistoryCreateOrConnectWithoutUserInput[]
    createMany?: HistoryCreateManyUserInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type HistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<HistoryCreateWithoutUserInput, HistoryUncheckedCreateWithoutUserInput> | HistoryCreateWithoutUserInput[] | HistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutUserInput | HistoryCreateOrConnectWithoutUserInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutUserInput | HistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HistoryCreateManyUserInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutUserInput | HistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutUserInput | HistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type HistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HistoryCreateWithoutUserInput, HistoryUncheckedCreateWithoutUserInput> | HistoryCreateWithoutUserInput[] | HistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutUserInput | HistoryCreateOrConnectWithoutUserInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutUserInput | HistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HistoryCreateManyUserInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutUserInput | HistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutUserInput | HistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type HistoryCreateNestedManyWithoutPersonilInput = {
    create?: XOR<HistoryCreateWithoutPersonilInput, HistoryUncheckedCreateWithoutPersonilInput> | HistoryCreateWithoutPersonilInput[] | HistoryUncheckedCreateWithoutPersonilInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutPersonilInput | HistoryCreateOrConnectWithoutPersonilInput[]
    createMany?: HistoryCreateManyPersonilInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type HistoryUncheckedCreateNestedManyWithoutPersonilInput = {
    create?: XOR<HistoryCreateWithoutPersonilInput, HistoryUncheckedCreateWithoutPersonilInput> | HistoryCreateWithoutPersonilInput[] | HistoryUncheckedCreateWithoutPersonilInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutPersonilInput | HistoryCreateOrConnectWithoutPersonilInput[]
    createMany?: HistoryCreateManyPersonilInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type HistoryUpdateManyWithoutPersonilNestedInput = {
    create?: XOR<HistoryCreateWithoutPersonilInput, HistoryUncheckedCreateWithoutPersonilInput> | HistoryCreateWithoutPersonilInput[] | HistoryUncheckedCreateWithoutPersonilInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutPersonilInput | HistoryCreateOrConnectWithoutPersonilInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutPersonilInput | HistoryUpsertWithWhereUniqueWithoutPersonilInput[]
    createMany?: HistoryCreateManyPersonilInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutPersonilInput | HistoryUpdateWithWhereUniqueWithoutPersonilInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutPersonilInput | HistoryUpdateManyWithWhereWithoutPersonilInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type HistoryUncheckedUpdateManyWithoutPersonilNestedInput = {
    create?: XOR<HistoryCreateWithoutPersonilInput, HistoryUncheckedCreateWithoutPersonilInput> | HistoryCreateWithoutPersonilInput[] | HistoryUncheckedCreateWithoutPersonilInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutPersonilInput | HistoryCreateOrConnectWithoutPersonilInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutPersonilInput | HistoryUpsertWithWhereUniqueWithoutPersonilInput[]
    createMany?: HistoryCreateManyPersonilInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutPersonilInput | HistoryUpdateWithWhereUniqueWithoutPersonilInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutPersonilInput | HistoryUpdateManyWithWhereWithoutPersonilInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutHistoriesInput = {
    create?: XOR<UsersCreateWithoutHistoriesInput, UsersUncheckedCreateWithoutHistoriesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutHistoriesInput
    connect?: UsersWhereUniqueInput
  }

  export type PersonilCreateNestedOneWithoutHistoriesInput = {
    create?: XOR<PersonilCreateWithoutHistoriesInput, PersonilUncheckedCreateWithoutHistoriesInput>
    connectOrCreate?: PersonilCreateOrConnectWithoutHistoriesInput
    connect?: PersonilWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutHistoriesNestedInput = {
    create?: XOR<UsersCreateWithoutHistoriesInput, UsersUncheckedCreateWithoutHistoriesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutHistoriesInput
    upsert?: UsersUpsertWithoutHistoriesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutHistoriesInput, UsersUpdateWithoutHistoriesInput>, UsersUncheckedUpdateWithoutHistoriesInput>
  }

  export type PersonilUpdateOneWithoutHistoriesNestedInput = {
    create?: XOR<PersonilCreateWithoutHistoriesInput, PersonilUncheckedCreateWithoutHistoriesInput>
    connectOrCreate?: PersonilCreateOrConnectWithoutHistoriesInput
    upsert?: PersonilUpsertWithoutHistoriesInput
    disconnect?: PersonilWhereInput | boolean
    delete?: PersonilWhereInput | boolean
    connect?: PersonilWhereUniqueInput
    update?: XOR<XOR<PersonilUpdateToOneWithWhereWithoutHistoriesInput, PersonilUpdateWithoutHistoriesInput>, PersonilUncheckedUpdateWithoutHistoriesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type HistoryCreateWithoutUserInput = {
    action: string
    detail?: string | null
    createdAt?: Date | string
    personil?: PersonilCreateNestedOneWithoutHistoriesInput
  }

  export type HistoryUncheckedCreateWithoutUserInput = {
    id?: number
    personilId?: number | null
    action: string
    detail?: string | null
    createdAt?: Date | string
  }

  export type HistoryCreateOrConnectWithoutUserInput = {
    where: HistoryWhereUniqueInput
    create: XOR<HistoryCreateWithoutUserInput, HistoryUncheckedCreateWithoutUserInput>
  }

  export type HistoryCreateManyUserInputEnvelope = {
    data: HistoryCreateManyUserInput | HistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: HistoryWhereUniqueInput
    update: XOR<HistoryUpdateWithoutUserInput, HistoryUncheckedUpdateWithoutUserInput>
    create: XOR<HistoryCreateWithoutUserInput, HistoryUncheckedCreateWithoutUserInput>
  }

  export type HistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: HistoryWhereUniqueInput
    data: XOR<HistoryUpdateWithoutUserInput, HistoryUncheckedUpdateWithoutUserInput>
  }

  export type HistoryUpdateManyWithWhereWithoutUserInput = {
    where: HistoryScalarWhereInput
    data: XOR<HistoryUpdateManyMutationInput, HistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type HistoryScalarWhereInput = {
    AND?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
    OR?: HistoryScalarWhereInput[]
    NOT?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
    id?: IntFilter<"History"> | number
    userId?: IntFilter<"History"> | number
    personilId?: IntNullableFilter<"History"> | number | null
    action?: StringFilter<"History"> | string
    detail?: StringNullableFilter<"History"> | string | null
    createdAt?: DateTimeFilter<"History"> | Date | string
  }

  export type HistoryCreateWithoutPersonilInput = {
    action: string
    detail?: string | null
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutHistoriesInput
  }

  export type HistoryUncheckedCreateWithoutPersonilInput = {
    id?: number
    userId: number
    action: string
    detail?: string | null
    createdAt?: Date | string
  }

  export type HistoryCreateOrConnectWithoutPersonilInput = {
    where: HistoryWhereUniqueInput
    create: XOR<HistoryCreateWithoutPersonilInput, HistoryUncheckedCreateWithoutPersonilInput>
  }

  export type HistoryCreateManyPersonilInputEnvelope = {
    data: HistoryCreateManyPersonilInput | HistoryCreateManyPersonilInput[]
    skipDuplicates?: boolean
  }

  export type HistoryUpsertWithWhereUniqueWithoutPersonilInput = {
    where: HistoryWhereUniqueInput
    update: XOR<HistoryUpdateWithoutPersonilInput, HistoryUncheckedUpdateWithoutPersonilInput>
    create: XOR<HistoryCreateWithoutPersonilInput, HistoryUncheckedCreateWithoutPersonilInput>
  }

  export type HistoryUpdateWithWhereUniqueWithoutPersonilInput = {
    where: HistoryWhereUniqueInput
    data: XOR<HistoryUpdateWithoutPersonilInput, HistoryUncheckedUpdateWithoutPersonilInput>
  }

  export type HistoryUpdateManyWithWhereWithoutPersonilInput = {
    where: HistoryScalarWhereInput
    data: XOR<HistoryUpdateManyMutationInput, HistoryUncheckedUpdateManyWithoutPersonilInput>
  }

  export type UsersCreateWithoutHistoriesInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    otp?: string | null
    otpExpires?: Date | string | null
    createdAt?: Date | string
  }

  export type UsersUncheckedCreateWithoutHistoriesInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    otp?: string | null
    otpExpires?: Date | string | null
    createdAt?: Date | string
  }

  export type UsersCreateOrConnectWithoutHistoriesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutHistoriesInput, UsersUncheckedCreateWithoutHistoriesInput>
  }

  export type PersonilCreateWithoutHistoriesInput = {
    NAMA1?: string | null
    NAMA2?: string | null
    NAMA3?: string | null
    KDPKT?: string | null
    PANGKAT?: string | null
    KORPS?: string | null
    HAR?: string | null
    NRP?: string | null
    KELAHIRAN?: string | null
    JAB1?: string | null
    JAB2?: string | null
    JAB3?: string | null
    JAB4?: string | null
    JAB5?: string | null
    TMTTNI?: string | null
    TGAB?: string | null
    BLAB?: string | null
    THAB?: string | null
    KDSAH?: string | null
    TMTMPP?: string | null
    TGMPP?: string | null
    BLMPP?: string | null
    THMPP?: string | null
    SDTG?: string | null
    SDBL?: string | null
    SDTH?: string | null
    TMTHENTI?: string | null
    TGHT?: string | null
    BLHT?: string | null
    THHT?: string | null
    KET1?: string | null
    KET2?: string | null
    KET3?: string | null
    KET4?: string | null
    KET5?: string | null
    KET6?: string | null
    USUL?: string | null
    FLR?: string | null
    NOSKEP?: string | null
    TGSKEP?: string | null
    KEPPRES?: string | null
    TGKEPP?: string | null
    A?: string | null
    BL?: string | null
    TH?: string | null
    KDM?: string | null
    KEPPANG?: string | null
    TGKEPPANG?: string | null
    TGGAL?: string | null
    BLGAL?: string | null
    BLGAL1?: string | null
    THGAL?: string | null
    createdAt?: Date | string
  }

  export type PersonilUncheckedCreateWithoutHistoriesInput = {
    id?: number
    NAMA1?: string | null
    NAMA2?: string | null
    NAMA3?: string | null
    KDPKT?: string | null
    PANGKAT?: string | null
    KORPS?: string | null
    HAR?: string | null
    NRP?: string | null
    KELAHIRAN?: string | null
    JAB1?: string | null
    JAB2?: string | null
    JAB3?: string | null
    JAB4?: string | null
    JAB5?: string | null
    TMTTNI?: string | null
    TGAB?: string | null
    BLAB?: string | null
    THAB?: string | null
    KDSAH?: string | null
    TMTMPP?: string | null
    TGMPP?: string | null
    BLMPP?: string | null
    THMPP?: string | null
    SDTG?: string | null
    SDBL?: string | null
    SDTH?: string | null
    TMTHENTI?: string | null
    TGHT?: string | null
    BLHT?: string | null
    THHT?: string | null
    KET1?: string | null
    KET2?: string | null
    KET3?: string | null
    KET4?: string | null
    KET5?: string | null
    KET6?: string | null
    USUL?: string | null
    FLR?: string | null
    NOSKEP?: string | null
    TGSKEP?: string | null
    KEPPRES?: string | null
    TGKEPP?: string | null
    A?: string | null
    BL?: string | null
    TH?: string | null
    KDM?: string | null
    KEPPANG?: string | null
    TGKEPPANG?: string | null
    TGGAL?: string | null
    BLGAL?: string | null
    BLGAL1?: string | null
    THGAL?: string | null
    createdAt?: Date | string
  }

  export type PersonilCreateOrConnectWithoutHistoriesInput = {
    where: PersonilWhereUniqueInput
    create: XOR<PersonilCreateWithoutHistoriesInput, PersonilUncheckedCreateWithoutHistoriesInput>
  }

  export type UsersUpsertWithoutHistoriesInput = {
    update: XOR<UsersUpdateWithoutHistoriesInput, UsersUncheckedUpdateWithoutHistoriesInput>
    create: XOR<UsersCreateWithoutHistoriesInput, UsersUncheckedCreateWithoutHistoriesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutHistoriesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutHistoriesInput, UsersUncheckedUpdateWithoutHistoriesInput>
  }

  export type UsersUpdateWithoutHistoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateWithoutHistoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonilUpsertWithoutHistoriesInput = {
    update: XOR<PersonilUpdateWithoutHistoriesInput, PersonilUncheckedUpdateWithoutHistoriesInput>
    create: XOR<PersonilCreateWithoutHistoriesInput, PersonilUncheckedCreateWithoutHistoriesInput>
    where?: PersonilWhereInput
  }

  export type PersonilUpdateToOneWithWhereWithoutHistoriesInput = {
    where?: PersonilWhereInput
    data: XOR<PersonilUpdateWithoutHistoriesInput, PersonilUncheckedUpdateWithoutHistoriesInput>
  }

  export type PersonilUpdateWithoutHistoriesInput = {
    NAMA1?: NullableStringFieldUpdateOperationsInput | string | null
    NAMA2?: NullableStringFieldUpdateOperationsInput | string | null
    NAMA3?: NullableStringFieldUpdateOperationsInput | string | null
    KDPKT?: NullableStringFieldUpdateOperationsInput | string | null
    PANGKAT?: NullableStringFieldUpdateOperationsInput | string | null
    KORPS?: NullableStringFieldUpdateOperationsInput | string | null
    HAR?: NullableStringFieldUpdateOperationsInput | string | null
    NRP?: NullableStringFieldUpdateOperationsInput | string | null
    KELAHIRAN?: NullableStringFieldUpdateOperationsInput | string | null
    JAB1?: NullableStringFieldUpdateOperationsInput | string | null
    JAB2?: NullableStringFieldUpdateOperationsInput | string | null
    JAB3?: NullableStringFieldUpdateOperationsInput | string | null
    JAB4?: NullableStringFieldUpdateOperationsInput | string | null
    JAB5?: NullableStringFieldUpdateOperationsInput | string | null
    TMTTNI?: NullableStringFieldUpdateOperationsInput | string | null
    TGAB?: NullableStringFieldUpdateOperationsInput | string | null
    BLAB?: NullableStringFieldUpdateOperationsInput | string | null
    THAB?: NullableStringFieldUpdateOperationsInput | string | null
    KDSAH?: NullableStringFieldUpdateOperationsInput | string | null
    TMTMPP?: NullableStringFieldUpdateOperationsInput | string | null
    TGMPP?: NullableStringFieldUpdateOperationsInput | string | null
    BLMPP?: NullableStringFieldUpdateOperationsInput | string | null
    THMPP?: NullableStringFieldUpdateOperationsInput | string | null
    SDTG?: NullableStringFieldUpdateOperationsInput | string | null
    SDBL?: NullableStringFieldUpdateOperationsInput | string | null
    SDTH?: NullableStringFieldUpdateOperationsInput | string | null
    TMTHENTI?: NullableStringFieldUpdateOperationsInput | string | null
    TGHT?: NullableStringFieldUpdateOperationsInput | string | null
    BLHT?: NullableStringFieldUpdateOperationsInput | string | null
    THHT?: NullableStringFieldUpdateOperationsInput | string | null
    KET1?: NullableStringFieldUpdateOperationsInput | string | null
    KET2?: NullableStringFieldUpdateOperationsInput | string | null
    KET3?: NullableStringFieldUpdateOperationsInput | string | null
    KET4?: NullableStringFieldUpdateOperationsInput | string | null
    KET5?: NullableStringFieldUpdateOperationsInput | string | null
    KET6?: NullableStringFieldUpdateOperationsInput | string | null
    USUL?: NullableStringFieldUpdateOperationsInput | string | null
    FLR?: NullableStringFieldUpdateOperationsInput | string | null
    NOSKEP?: NullableStringFieldUpdateOperationsInput | string | null
    TGSKEP?: NullableStringFieldUpdateOperationsInput | string | null
    KEPPRES?: NullableStringFieldUpdateOperationsInput | string | null
    TGKEPP?: NullableStringFieldUpdateOperationsInput | string | null
    A?: NullableStringFieldUpdateOperationsInput | string | null
    BL?: NullableStringFieldUpdateOperationsInput | string | null
    TH?: NullableStringFieldUpdateOperationsInput | string | null
    KDM?: NullableStringFieldUpdateOperationsInput | string | null
    KEPPANG?: NullableStringFieldUpdateOperationsInput | string | null
    TGKEPPANG?: NullableStringFieldUpdateOperationsInput | string | null
    TGGAL?: NullableStringFieldUpdateOperationsInput | string | null
    BLGAL?: NullableStringFieldUpdateOperationsInput | string | null
    BLGAL1?: NullableStringFieldUpdateOperationsInput | string | null
    THGAL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonilUncheckedUpdateWithoutHistoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    NAMA1?: NullableStringFieldUpdateOperationsInput | string | null
    NAMA2?: NullableStringFieldUpdateOperationsInput | string | null
    NAMA3?: NullableStringFieldUpdateOperationsInput | string | null
    KDPKT?: NullableStringFieldUpdateOperationsInput | string | null
    PANGKAT?: NullableStringFieldUpdateOperationsInput | string | null
    KORPS?: NullableStringFieldUpdateOperationsInput | string | null
    HAR?: NullableStringFieldUpdateOperationsInput | string | null
    NRP?: NullableStringFieldUpdateOperationsInput | string | null
    KELAHIRAN?: NullableStringFieldUpdateOperationsInput | string | null
    JAB1?: NullableStringFieldUpdateOperationsInput | string | null
    JAB2?: NullableStringFieldUpdateOperationsInput | string | null
    JAB3?: NullableStringFieldUpdateOperationsInput | string | null
    JAB4?: NullableStringFieldUpdateOperationsInput | string | null
    JAB5?: NullableStringFieldUpdateOperationsInput | string | null
    TMTTNI?: NullableStringFieldUpdateOperationsInput | string | null
    TGAB?: NullableStringFieldUpdateOperationsInput | string | null
    BLAB?: NullableStringFieldUpdateOperationsInput | string | null
    THAB?: NullableStringFieldUpdateOperationsInput | string | null
    KDSAH?: NullableStringFieldUpdateOperationsInput | string | null
    TMTMPP?: NullableStringFieldUpdateOperationsInput | string | null
    TGMPP?: NullableStringFieldUpdateOperationsInput | string | null
    BLMPP?: NullableStringFieldUpdateOperationsInput | string | null
    THMPP?: NullableStringFieldUpdateOperationsInput | string | null
    SDTG?: NullableStringFieldUpdateOperationsInput | string | null
    SDBL?: NullableStringFieldUpdateOperationsInput | string | null
    SDTH?: NullableStringFieldUpdateOperationsInput | string | null
    TMTHENTI?: NullableStringFieldUpdateOperationsInput | string | null
    TGHT?: NullableStringFieldUpdateOperationsInput | string | null
    BLHT?: NullableStringFieldUpdateOperationsInput | string | null
    THHT?: NullableStringFieldUpdateOperationsInput | string | null
    KET1?: NullableStringFieldUpdateOperationsInput | string | null
    KET2?: NullableStringFieldUpdateOperationsInput | string | null
    KET3?: NullableStringFieldUpdateOperationsInput | string | null
    KET4?: NullableStringFieldUpdateOperationsInput | string | null
    KET5?: NullableStringFieldUpdateOperationsInput | string | null
    KET6?: NullableStringFieldUpdateOperationsInput | string | null
    USUL?: NullableStringFieldUpdateOperationsInput | string | null
    FLR?: NullableStringFieldUpdateOperationsInput | string | null
    NOSKEP?: NullableStringFieldUpdateOperationsInput | string | null
    TGSKEP?: NullableStringFieldUpdateOperationsInput | string | null
    KEPPRES?: NullableStringFieldUpdateOperationsInput | string | null
    TGKEPP?: NullableStringFieldUpdateOperationsInput | string | null
    A?: NullableStringFieldUpdateOperationsInput | string | null
    BL?: NullableStringFieldUpdateOperationsInput | string | null
    TH?: NullableStringFieldUpdateOperationsInput | string | null
    KDM?: NullableStringFieldUpdateOperationsInput | string | null
    KEPPANG?: NullableStringFieldUpdateOperationsInput | string | null
    TGKEPPANG?: NullableStringFieldUpdateOperationsInput | string | null
    TGGAL?: NullableStringFieldUpdateOperationsInput | string | null
    BLGAL?: NullableStringFieldUpdateOperationsInput | string | null
    BLGAL1?: NullableStringFieldUpdateOperationsInput | string | null
    THGAL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryCreateManyUserInput = {
    id?: number
    personilId?: number | null
    action: string
    detail?: string | null
    createdAt?: Date | string
  }

  export type HistoryUpdateWithoutUserInput = {
    action?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personil?: PersonilUpdateOneWithoutHistoriesNestedInput
  }

  export type HistoryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    personilId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    personilId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryCreateManyPersonilInput = {
    id?: number
    userId: number
    action: string
    detail?: string | null
    createdAt?: Date | string
  }

  export type HistoryUpdateWithoutPersonilInput = {
    action?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutHistoriesNestedInput
  }

  export type HistoryUncheckedUpdateWithoutPersonilInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryUncheckedUpdateManyWithoutPersonilInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
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