//-------------------------- quick helpers

export function getElementById(element: string) 
{
  return (<HTMLInputElement>document.getElementById(element));
}

export function createElement(type: any, element: string)
{
  return (<typeof type>document.createElement(element));
}
