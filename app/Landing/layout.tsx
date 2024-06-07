import {Bricolage_Grotesque} from 'next/font/google';


const bricolageGrotesque = Bricolage_Grotesque({
    subsets:['latin'],
    display: 'swap',
    variable: '--bricolageGrotesque-font'
})



export default function LandingLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return(
        <div className={bricolageGrotesque.className}>
            {children}
        </div>
    )
}