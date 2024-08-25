import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const queryKey = ['boards'];
export const useBoardsQuery = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: [...queryKey],
    queryFn: async () => {
      return await axios.get('https://api.github.com/repos/octocat/Spoon-Knife/issues', {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
          Accept: 'application/vnd.github.v3+json',
        },
        params: {
          per_page: 100,
        },
      });
    },
    retry: false,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });

  return { data: data ? data.data : [], isLoading, error };
};
