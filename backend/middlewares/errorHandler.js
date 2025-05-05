export const errorHandler = ( req, res, next) => {
  console.log( req.path, req.method); // Log the request path, method, and body
  next(); 
  
    
    };
  