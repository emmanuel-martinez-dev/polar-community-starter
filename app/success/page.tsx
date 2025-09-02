export default async function Success({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const params = await searchParams;
    const checkoutId = params.checkout_id as string;
    return <div>Success</div>;
}