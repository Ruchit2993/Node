export function sendResponse(res, stausCode, data) {
    res.status(stausCode).json(data)
}