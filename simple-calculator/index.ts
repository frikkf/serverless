export const index = (context: any, req: any) => {
  
  if (req.query.first && req.query.second) {
    
    const first: number = Number(req.query.first);
    const second: number = Number(req.query.second);
    const third: number = Number(req.query.third);
    const result = first+(10*second)+third;
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