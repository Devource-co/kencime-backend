import { buildSchema, Resolver, Query } from 'type-graphql';
import { GraphQLSchema } from 'graphql';
import { RegisterResolver } from '../modules/User/register/Register';
import { SigninResolver } from '../modules/User/signin/Signin';

@Resolver()
class WelcomeResolver {
  @Query(() => String)
  async welcome(): Promise<string> {
    return 'welcome to Kencinema 👋🏾';
  }
}

export const createSchema = (): Promise<GraphQLSchema> =>
  buildSchema({
    resolvers: [WelcomeResolver, RegisterResolver, SigninResolver]
  });
