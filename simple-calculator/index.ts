export const index = (context: any, req: any) => {
  
  if (req.query.first && req.query.second) {
    
    const first: number = Number(req.query.first);
    const second: number = Number(req.query.second);
    const result = first+second;
    context.res = {
      // status: 200, /* Defaults to 200 */
      body: ""+result
    };
  }
  else {
    context.res = {
      status: 400,
      body: "Please pass a name on the query string or in the request body"
    };
  }
  context.done();
}