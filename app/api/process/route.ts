import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const reference = formData.get('reference') as File | null;
  const images = formData.getAll('images') as File[];
  const prompt = formData.get('prompt') as string | null;
  const duration = formData.get('duration') as string | null;
  const aspect = formData.get('aspect') as string | null;
  const style = formData.get('style') as string | null;

  const taskId = `vid-${Date.now()}`;

  return NextResponse.json(
    {
      status: 'queued',
      taskId,
      referenceName: reference?.name ?? 'unknown-reference.mp4',
      imageCount: images.length,
      prompt: prompt ?? 'No prompt provided',
      duration: duration ?? '18',
      aspect: aspect ?? '16:9',
      style: style ?? 'Cinematic',
      message:
        'Reference video analysis started. The system is preparing a new edit and enhancement workflow.'
    },
    { status: 200 }
  );
}

export async function GET() {
  return NextResponse.json({
    service: 'video-ai-studio',
    mode: 'reference-video-generation',
    supportedActions: ['generate', 'enhance'],
    ready: true
  });
}
