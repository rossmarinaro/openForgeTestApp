/* USERS */

import { Octokit } from 'octokit';

const octokit = new Octokit();

export interface User {
    id: number,
    public_repos: number,
    login: string,
    avatar_url: string,
    html_url: string,
    repos_url: string,
}

//---------------- get user accounts


export async function fetchAccounts(users: User[], since: number, fetchMore: boolean)
{

  const accounts: any = await octokit.request(fetchMore ? `GET /users?since=${since}` : 'GET /users', {}); 

  accounts.data.map(async (account: any) => {
      
    const user = await octokit.request(fetchMore ? `GET /users?since${since}/${account.login}` : `GET /users/${account.login}`, { username: 'USERNAME' });

    //push account to users array

      users.push({
        id: account.id,
        public_repos: user.data.public_repos,
        login: account.login,
        avatar_url: account.avatar_url,
        html_url: account.html_url,
        repos_url: account.repos_url
      });

  });


  return false;


}

