import { NextRequest, NextResponse } from "next/server";
import { ApiError, globalApi } from "../../api";

export async function GET(req: NextRequest,{
  params,
}: {
  params: Promise<{ taskId: string }>;
}){
    const { taskId } = await params;
    try{
        const res = await globalApi.get(`/tasks/${taskId}`);
        return NextResponse.json(res.data)
    }catch(err){
        const error = err as ApiError;
        return NextResponse.json({
            error: error.response?.data.error || error.message
        }, {
            status: error.status
        })
    }
}