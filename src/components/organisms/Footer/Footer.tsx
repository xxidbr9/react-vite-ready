import FacebookLogo from '@assets/svg/social_media/FacebookLogo'
import InstagramLogo from '@assets/svg/social_media/InstagramLogo'
import LinkedinLogo from '@assets/svg/social_media/LinkedinLogo'
import TwitterLogo from '@assets/svg/social_media/Twitterlogo'
import YoutubeLogo from '@assets/svg/social_media/YoutubeLogo'
import Brand from '@components/atoms/Brand'
import Typography from '@components/atoms/Typography'
import React, { useCallback, useMemo } from 'react'
import GplayImage from '@assets/images/g_play_btn.png'
import iStoreImage from '@assets/images/istore_btn.png'
import color from '@styles/colors'
import styled from '@emotion/styled'
import tw from 'twin.macro'

/* 
===== TODO =====
[ ] Add Color Variant
[ ] Mobile Responsive
=== END TODO ===

*/


type FooterMenuTypes = {
  title: React.Component | string,
  listMenu: React.Component[] | string[],
  isRow?: boolean
}

const FooterMenu: React.FC<FooterMenuTypes> = (props) => {
  const { listMenu, title } = props
  return (
    <div>
      <span>
        <Typography weight={"bold"} variant={14} className="uppercase">
          {title}
        </Typography>
      </span>
      <ul className="mt-2 flex flex-col gap-0">
        {listMenu.map((item, index) => (
          <li key={index}><Typography variant={14}>{item}</Typography></li>
        ))}
      </ul>
    </div>
  )
}

const FooterSocialMedia = ({ color, ...props }) => {
  const socialList = useMemo(() => [
    <FacebookLogo fill={color} />,
    <InstagramLogo fill={color} />,
    <LinkedinLogo fill={color} />,
    <TwitterLogo fill={color} />,
    <YoutubeLogo fill={color} />
  ], [color])
  return (
    <div>
      <span>
        <Typography weight={"bold"} variant={14} className="uppercase">
          Media Sosial
        </Typography>
      </span>
      <ul className="mt-2 flex gap-4">
        {socialList.map((component, index) => (
          <li key={index}>
            {component}
          </li>
        ))}
      </ul>
    </div>
  )
}

const FooterLinkApps = (props) => {
  return (
    <div>
      <span>
        <Typography weight={"bold"} variant={14} className="uppercase">
          Dapatkan Aplikasi Glowstore
        </Typography>
      </span>
      <div className="mt-2 flex gap-3 mobile:justify-center tablet:justify-start">
        <img src={GplayImage} alt="Glowstore google play link" className="mobile:w-2/5 mobile:h-auto"/>
        <img src={iStoreImage} alt="Glowstore apple store link" className="mobile:w-2/5 mobile:h-auto"/>
      </div>
    </div>
  )
}


export const VariantFooter = ["dark", "light", "grey"] as const

type VariantType = typeof VariantFooter[number]

export type FooterProps = {
  variant?: VariantType,
}

const Footer: React.FC<FooterProps> = (props) => {
  /* 
    ===== TODO =====
    [ ] Setup for footer menu
    === END TODO ===
  
  */

  const { variant } = props
  const variantBGHandler = useCallback((color) => {
    switch (color) {
      case "dark":
        return "bg-BLACK text-white"
      case "grey":
        return "bg-BROKEN_WHITE text-BROWN_2"
      case "light":
        return "bg-FIXED_WHITE_1 text-BROWN_2"
      default:
        return "bg-BLACK text-white"
    }
  }, [variant])

  const variantSVGColorHandler = useCallback((theme) => {
    switch (theme) {
      case "dark":
        return color.FIXED_WHITE_1
      case "grey" || "light":
        return color.BROWN_2
      default:
        return color.BROWN_2
    }
  }, [variant])

  const menus: FooterMenuTypes[] = [
    { title: "Konten", listMenu: ["Produk", "Treatment", "Klinik", "Artikel"] },
    { title: "Fitur", listMenu: ["Reservasi", "Skin Analyzer", "Promo", "Point", "Reseller"] },
    { title: "Informasi", listMenu: ["Tentang Kami", "Karir", "Ella Platinum"] },
    { title: "Layanan", listMenu: ["Dukungan / Bantuan", "Kontak"] },
  ]



  return (
    <footer className={`${variantBGHandler(variant)} relative`}>
      <div className="py-10 laptop:container mobile:px-4 mx-auto ">
        <Brand />
        <div className="py-8 w-full laptop:flex laptop:gap-4 border-b-2 justify-between mobile:grid mobile:grid-cols-2 mobile:gap-5">
          {menus.map((menu, index) => (
            <FooterMenu {...menu} key={index} />
          ))}
          
          <div className="laptop:hidden gap-10 mobile:gap-1 my-8 mobile:flex mobile:flex-col mobile:col-span-2">
            <Typography className="underline">Kebijakan Privasi</Typography>
            <Typography className="underline">Syarat & Ketentuan</Typography>
          </div>

          <div className="mobile:col-span-2 tablet:col-span-1">
            <FooterSocialMedia color={variantSVGColorHandler(variant)} />
          </div>
          <div className="mobile:col-span-2 tablet:col-span-1 ">
            <FooterLinkApps />
          </div>

        </div>
        <div className="laptop:flex gap-10 my-8 mobile:hidden">
          <Typography className="underline">Kebijakan Privasi</Typography>
          <Typography className="underline">Syarat & Ketentuan</Typography>
        </div>
        <Typography variant={12} className="mobile:pt-4 laptop:pt-0 laptop:text-left mobile:text-center">
          © 2008 - 2021 Ella Skin Care | Ella Skin Care is a trademark of PT Ella Karunia Estetika. Registered in the Directorate General of Intellectual Property of the Republic of Indonesia.
        </Typography>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  variant: "light"
}

export default Footer
