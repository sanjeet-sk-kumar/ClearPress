export function GET(requets){
    const resp= {
        status: 200,
        body: {
            message: "Hello World"
        }
    }
    return new Response(JSON.stringify(resp.body), {status: resp.status})
}