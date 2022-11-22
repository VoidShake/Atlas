import type { InputMaybe, Scalars } from '~~/graphql/generated'

export interface TimestampFilter {
   createdAfter?: InputMaybe<Scalars['DateTime']>
   createdBefore?: InputMaybe<Scalars['DateTime']>
   modifiedAfter?: InputMaybe<Scalars['DateTime']>
   modifiedBefore?: InputMaybe<Scalars['DateTime']>
}

type DateKey = keyof TimestampFilter
export type RawTimestampFilter<T> = Partial<Omit<T, keyof TimestampFilter>> & Partial<Record<DateKey, string>>

export function transformFilter<T>(raw: RawTimestampFilter<T>) {
   const [createdAfter, createdBefore, modifiedAfter, modifiedBefore] = [
      raw.createdAfter,
      raw.createdBefore,
      raw.modifiedAfter,
      raw.modifiedBefore,
   ].map(it => {
      if (!notNull(it)) return undefined
      const millis = new Date(it).getTime()
      return isNaN(millis) ? undefined : millis
   })
   return { ...raw, createdAfter, createdBefore, modifiedAfter, modifiedBefore } as T
}

export function rawFilter<T extends TimestampFilter>(transformed: T) {
   const [createdAfter, createdBefore, modifiedAfter, modifiedBefore] = [
      transformed.createdAfter,
      transformed.createdBefore,
      transformed.modifiedAfter,
      transformed.modifiedBefore,
   ].map(it => {
      if (!notNull(it)) return undefined
      return new Date(it).toISOString().slice(0, 10)
   })
   return { ...transformed, createdAfter, createdBefore, modifiedAfter, modifiedBefore } as RawTimestampFilter<T>
}

export function useFilter<T extends TimestampFilter>(key: string) {
   const raw = useState<RawTimestampFilter<T>>(`${key}-filter`, () => ({}))
   const transformed = computed<T>(() => transformFilter(raw.value))
   return { raw, transformed }
}
