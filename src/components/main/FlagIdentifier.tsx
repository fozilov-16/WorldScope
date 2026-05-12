"use client"

import React from "react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { Upload, Button } from "antd"
import { InboxOutlined, UploadOutlined } from "@ant-design/icons"
import type { UploadProps } from "antd"

const { Dragger } = Upload

const FlagIdentifier = () => {
  const t = useTranslations("Identifier")

  const uploadProps: UploadProps = {
    name: "file",
    multiple: false,
    showUploadList: false,
    beforeUpload: () => false,
  }

  return (
    <section className="mt-12 px-4 flex flex-col items-center">

      {/* HEADER */}
      <header className="flex items-end justify-center gap-6 sm:gap-10 text-center max-w-[1200px]">

        <Image
          src="/IconI.jpg"
          alt="icon"
          width={131}
          height={94}
          className="w-[60px] sm:w-[131px] h-auto hidden sm:block"
        />

        <div className="flex flex-col items-center gap-4">
          <h1 className="font-nico text-[30px] sm:text-[48px] leading-[100%]">
            {t("text")
            .split(" ")
            .map((word, index) => {

              const isRussian = /[а-яА-ЯЁё]/.test(word);

              return (
                <span
                  key={index}
                  className={`${isRussian ? "font-mont text-[20px] sm:text-[38px] font-[600] leading-[120%] sm:leading-[100%]" : "font-nico"}`}
                >
                  {word}{" "}
                </span>
              );
            })}
          </h1>

          <p className="font-mont text-[14px] sm:text-[20px]">
            {t("text2")}
          </p>
        </div>

        <Image
          src="/IconI.jpg"
          alt="icon"
          width={131}
          height={94}
          className="w-[60px] sm:w-[131px] h-auto hidden sm:block"
        />

      </header>

      {/* CARD */}
      <div className="relative mt-14 w-full sm:w-[1200px] min-h-[320px] sm:min-h-[531px] rounded-[40px] overflow-hidden">

        {/* BACKGROUND */}
        <Image
          src="/backIdentifier.png"
          alt="background"
          fill
          priority
          className="object-cover brightness-[0.75]"
        />

        {/* CONTENT */}
        <div className="relative z-10 flex items-center justify-center p-6 sm:p-10 min-h-[320px] sm:min-h-[531px]">

          <div
            className="
              w-full
              max-w-[900px]
              min-h-[260px]
              sm:max-w-[1105px]
              sm:min-h-[420px]
              bg-white/15
              backdrop-blur-2xl
              border border-white/30
              rounded-[35px]
              flex flex-col
              items-center
              justify-center
              text-white
              text-center
              px-6
              py-10
              font-mont
              shadow-[0_0_60px_rgba(0,150,255,0.25)]
            "
          >
            {/* Title */}
            <h2 className="text-[22px] sm:text-[40px] font-medium mb-3">
              {t("tech")}
            </h2>

            {/* Subtitle */}
            <p className="text-[14px] sm:text-[18px] opacity-80 mb-8">
              {t("tech2")}
            </p>

            {/* Upload Area */}
            <div className="w-full max-w-[500px]">

              <Dragger
                {...uploadProps}
                className="!bg-white/10 !border-white/30 !rounded-2xl hover:!border-white/60 !py-6"
              >
                <InboxOutlined style={{ fontSize: 30, color: "white" }} />
                <p className="text-white mt-3 text-[18px] font-mont">
                  {t("drop")}
                </p>
              </Dragger>

              <div className="my-5 opacity-70">
                {t("or")}
              </div>

              <Upload {...uploadProps}>
                <Button
                  icon={<UploadOutlined />}
                  className="!bg-white/10 !text-white !border-white/30 hover:!bg-white/20 !rounded-xl"
                >
                  {t("upload")}
                </Button>
              </Upload>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default FlagIdentifier