
type baseResponseModel = {
    isSuccess: boolean,
    message: string,
    data: any,
    error: string | null | undefined | Error | unknown
}


export const baseResponseModel = (isSuccess: boolean, message: string, data?: any, error?: unknown | null | undefined): Partial<baseResponseModel> => {
    return {
        isSuccess: isSuccess,
        message: message,
        data: data,
        error: error
    }
}

/**
 * Constants
 */

export const ADMIN = "ADMIN"