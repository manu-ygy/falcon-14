import { NextRequest, NextResponse } from 'next/server'
const { CohereClientV2 } = require('cohere-ai')

// Inisialisasi client Cohere dengan API key dari environment variable
const cohere = new CohereClientV2({token: process.env.COHERE_API_KEY || ''})

export async function POST(req: NextRequest): Promise<NextResponse> {
	const body = await req.json()
	const { content } = body

	if (!content) {
		return NextResponse.json(
			{ message: 'Missing content in request body', success: false },
			{ status: 400 }
		)
	}

	try {
		const response = await cohere.chat({
			model: 'command-r-plus',
			messages: [
				{
					role: 'user',
					content: content,
				},
			],
		})

		return NextResponse.json(
			{ message: response.message.content, success: true, data: response.body },
			{ status: 200 }
		)
	} catch (error) {
		console.error('Error during chat:', error)
		return NextResponse.json(
			{ message: 'Internal Server Error', success: false },
			{ status: 500 }
		)
	}
}
