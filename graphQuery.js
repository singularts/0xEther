import { gql } from 'apollo-boost';

export const GET_SPLIT_WALLETS_WITH_MIN_DISTRIBUTOR_FEE = gql`
  query GetSplitWalletsWithMinDistributorFee($minDistributorFee: BigInt!) {
    splits(first: 100, where: { distributorFee_gte: $minDistributorFee }) {
      id
      recipients {
        account {
          id
        }
        ownership
      }
      distributorFee
      controller
    }
  }
`;
