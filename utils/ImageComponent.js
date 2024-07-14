import Image from "next/image"

export default function ImageComponent({ path, alt }) {
    return (
        <>
            <Image src={path} fill={true} alt={alt} />

        </>
    )
}