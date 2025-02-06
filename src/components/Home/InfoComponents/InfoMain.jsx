import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css'; 
import "../../../css/infoMain.css"
import { useCookies } from "react-cookie";

const InfoMain = () => {

    const [cookies, setCookie] = useCookies(["darkMode"]);

    return(
        <>
            <div className={`flex items-center flex-col sm:mt-56 mt-24 select-none ${cookies.darkMode ? "dark-mode bprder-stone-700" : "light-mode"} px-4`}>
                <p className="inter-600 text-2xl sm:text-6xl mb-6">Aklınızdaki bazı sorular</p>
                <Accordion allowZeroExpanded>
                    <AccordionItem>
                        <AccordionItemButton>
                         Sitenin yapım sürecinde veya sonrasında değişiklik yapabiliyor muyuz?
                        </AccordionItemButton>
                        <AccordionItemPanel>
                        <p className='inter-600'>Evet, seçtiğiniz plana göre size revizyon hakkı veriyoruz. Revizyon hakkınız bittiğinde revizyon hakkı satın alabilirsiniz.</p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemButton>
                         Site ücretini ödedim ancak siteyi iptal etmek/kapatmak istiyorum.
                        </AccordionItemButton>
                        <AccordionItemPanel>
                        <p className='inter-600'>Eğer site hazırlanış sürecinde henüz arka uç tarafı (back-end) geliştirilmeye başlanmadıysa, ücretinizin 50% iade edilir. Eğer arka ucun yapım sürecine başlandıysa ücretiniz iade edilemez.</p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemButton>
                         Sitede teknik bir sorun çıktı, revizyon hakkımızdan mı gidiyor?
                        </AccordionItemButton>
                        <AccordionItemPanel>
                        <p className='inter-600'>Hayır, eğer sorun bizden kaynaklı bir sorun ise, hayır revizyon hakkınızdan kullanılmadan ücretsiz olarak düzeltiliyor.</p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemButton>
                         Site siparişi vermek istiyorum ama sitenin tasarımı hakkında en ufak fikrim yok.
                        </AccordionItemButton>
                        <AccordionItemPanel>
                        <p className='inter-600'>Sıkıntı yok, isterseniz alternatif seçeneklerimizden site tasarımını hazırlatabilir veya tasarımını bize bırakabilirsiniz.</p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemButton>
                        Sitemi Google'da yayınlatabilecek miyim?
                        </AccordionItemButton>
                        <AccordionItemPanel>
                        <p className='inter-600'>Evet, siteniz ek bir ücretle Google'da yayımlanabilecek. En üst seviyelerede taşımak için elimizden geleni yapabileceğiz.</p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemButton>
                        Sitenin analizlerini detaylarını görebileceğim bir yer var mı?
                        </AccordionItemButton>
                        <AccordionItemPanel>
                        <p className='inter-600'>Evet, hangi ülkeden bağlandıklarını, hangi linke yönlendiklerini, hangi linkten geldiklerini, telefon markalarına kadar analiz edebileceğiniz analizler veriyoruz.</p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemButton>
                        Sitemin içeriğini düzenleyebilecekmiyim?
                        </AccordionItemButton>
                        <AccordionItemPanel>
                        <p className='inter-600'>Evet, ek bir ücretle size bir panel vereceğiz ve o panel üzerinden sitenizin içeriklerini düzenleyebiliyor olacaksınız.</p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemButton>
                        Düzenlemeleri vb. işleri artık başka bir firmayla yapmak istiyorum.
                        </AccordionItemButton>
                        <AccordionItemPanel>
                        <p className='inter-600'>Sıkıntı yok, sizden hiç bir ücret, aidat, cayma bedeli almadan; server bilgilerini, kaynak kodlarını size teslim ediyoruz ancak sonrasında oluşacak sorunlardan sorumluluk almıyoruz.</p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        </>
    )
}

export default InfoMain