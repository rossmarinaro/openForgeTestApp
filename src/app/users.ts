/* USERS */

import { Octokit } from 'octokit';


export interface User {
    id: number,
    public_repos: number,
    login: string,
    avatar_url: string,
    html_url: string,
    repos_url: string,
}

export async function fetchUsers(users: User[])
{
    //get user accounts

    const octokit = new Octokit(),
    accounts = await octokit.request('GET /users', {});

    accounts.data.map(async account => {
      
      const user = await octokit.request(`GET /users/${account.login}`, { username: 'USERNAME' });

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
}