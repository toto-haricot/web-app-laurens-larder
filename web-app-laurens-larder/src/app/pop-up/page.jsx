import Image from "next/image";
import Link from "next/link";

export default function PopUp() {
    return (
        <section className="homepage-section">
            <div className="title-plus-description">
                <div className="title">
                    LAUREN'S LARDER POP-UPS
                </div>
                <div className="description pb-[30px]">
                    Our catering trailer has been a regular at the Sunday Market, serving up fresh breaky burgers that keep locals coming back. You might have also seen us at community events, especially if you’ve tried our famous loaded nachos. The trailer is available to book for private functions, from small celebrations to larger events.
                </div>
            </div>
            <div className="relative w-[80%] h-[400px]">
                <Image
                    src="/laurens-larder-ag-show-2.jpg"
                    alt="pop up cover image"
                    fill
                    style={{objectFit:'cover'}}
                    className="cursor-pointer rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105 object-top"
                    />
            </div>
        </section>
    )
}