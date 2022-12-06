import React from 'react'

type Props = {}

export default function Footer({ }: Props) {
    const date = new Date().getFullYear();
    return (
        <div className="bg-gray-700 justify-center text-center p-10">
            <h3 className="text-white text-lg">
                &copy; Designed &amp; Developed in {date} by - Himanshu Gabhane
            </h3>
        </div>
    )
}