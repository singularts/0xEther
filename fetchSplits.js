import graphClient from './graphClient.js';
import { GET_SPLIT_WALLETS_WITH_MIN_DISTRIBUTOR_FEE } from './graphQuery.js';

async function fetchSplits(minDistributorFee) {
  try {
    const { data } = await graphClient.query({
      query: GET_SPLIT_WALLETS_WITH_MIN_DISTRIBUTOR_FEE,
      variables: { minDistributorFee },
    });

    console.log('Fetched splits:', data.splits);
    return data.splits;
  } catch (error) {
    console.error('Error fetching splits:', error);
  }
}

fetchSplits(2000);
