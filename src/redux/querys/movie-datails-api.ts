import {
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import {baseAPI} from '../../configs';
import {CastType, MovieDetailType, MovieImageItem} from '../../services/dto';
import {api} from '../../services';

type movieDetailsReturnType = {
  cast: CastType[];
  details: MovieDetailType;
  image: MovieImageItem;
};

export const movieDetailsApi = createApi({
  reducerPath: 'movieDetails',
  baseQuery: fetchBaseQuery({baseUrl: baseAPI}),
  endpoints: builder => ({
    getMovieDetails: builder.query<movieDetailsReturnType, number>({
      async queryFn(id) {
        const movieCredits = api.getMovieCredits(id);
        const movieDetails = api.getMovieDetails(id);
        const movieImages = api.getMovieImages(id);
        const result = await Promise.all([
          movieCredits,
          movieDetails,
          movieImages,
        ]);

        return result[0] && result[1] && result[2]
          ? {
              data: {
                cast: result[0].cast.slice(0, 4),
                details: result[1],
                image: result[2].posters[0] || result[2].backdrops[0],
              },
            }
          : {error: {error: 'ERROR'} as FetchBaseQueryError};
      },
    }),
  }),
});

export const {useGetMovieDetailsQuery} = movieDetailsApi;
