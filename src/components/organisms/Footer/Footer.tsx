import FacebookLogo from '@app/assets/svg/social_media/FacebookLogo'
import InstagramLogo from '@app/assets/svg/social_media/InstagramLogo'
import LinkedinLogo from '@app/assets/svg/social_media/LinkedinLogo'
import TwitterLogo from '@app/assets/svg/social_media/Twitterlogo'
import YoutubeLogo from '@app/assets/svg/social_media/YoutubeLogo'
import Brand from '@app/components/atoms/Brand'
import Typography from '@app/components/atoms/Typography'
import React from 'react'
import GplayImage from '@app/assets/images/g_play_btn.png'
import iStoreImage from '@app/assets/images/istore_btn.png'

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
  return (
    <div>
      <span>
        <Typography weight={"bold"} variant={14} className="uppercase">
          Media Sosial
        </Typography>
      </span>
      <ul className="mt-2 flex gap-4">
        <li>
          <FacebookLogo fill={color} />
        </li>
        <li>
          <InstagramLogo fill={color} />
        </li>
        <li>
          <LinkedinLogo fill={color} />
        </li>
        <li>
          <TwitterLogo fill={color} />
        </li>
        <li>
          <YoutubeLogo fill={color} />
        </li>
      </ul>
    </div>
  )
}

const FooterLinkApps = () => {
  return (
    <div>
      <span>
        <Typography weight={"bold"} variant={14} className="uppercase">
          Dapatkan Aplikasi Glowstore
        </Typography>
      </span>
      <div className="mt-2 flex gap-3">
        <img src={GplayImage} alt="Glowstore google play link" />
        <img src={iStoreImage} alt="Glowstore apple store link" />
      </div>
    </div>
  )
}


const VariantFooter = ["dark", "light", "grey"] as const

type VariantType = typeof VariantFooter[number]

export type FooterProps = {
  variant?: VariantType
}

const Footer: React.FC<FooterProps> = (props) => {

  const menus: FooterMenuTypes[] = [
    { title: "Konten", listMenu: ["Produk", "Treatment", "Klinik", "Artikel"] },
    { title: "Fitur", listMenu: ["Reservasi", "Skin Analyzer", "Promo", "Point", "Reseller"] },
    { title: "Informasi", listMenu: ["Tentang Kami", "Karir", "Ella Platinum"] },
    { title: "Layanan", listMenu: ["Dukungan / Bantuan", "Kontak"] },
  ]

  return (
    <footer className="bg-BLACK relative text-white">
      <div className="py-10 container mx-auto ">
        <Brand />
        <div className="py-8 w-full flex gap-4 border-b-2 justify-between">
          {menus.map((menu, index) => (
            <FooterMenu {...menu} />
          ))}
          <FooterSocialMedia color={"#fff"} />
          <FooterLinkApps />
        </div>
        <div className="flex gap-10 my-10">
          <Typography className="underline">Kebijakan Privasi</Typography>
          <Typography className="underline">Syarat & Ketentuan</Typography>
        </div>
        <Typography variant={12}>
          © 2008 - 2021 Ella Skin Care | Ella Skin Care is a trademark of PT Ella Karunia Estetika. Registered in the Directorate General of Intellectual Property of the Republic of Indonesia.
        </Typography>
      </div>
    </footer>
  )
}

export default Footer
