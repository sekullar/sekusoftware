import Footer from "./Footer"
import Header from "./Header"

const ShopTerms = () => {
    return(
        <>
            <Header />
            <p className="inter-600 text-4xl text-center">Sipariş Şartları</p>
            <div className="flex flex-col items-center mt-12">
                <p className="inter-400 w-[700px]">Seku Software bir şirket değildir, reşit olmayan bir girişimcinin ücret karşılığı hizmet vermesidir. Ödemesi yapılan her siteye bakım ve teknik destek yapılmaktadır. Site bakımı ve teknik desteği <span className="inter-500">şu şartlarda yapılmamaktadır:</span>
                    <ul className="mt-5 list-disc ms-12">
                        <li>
                            <p className="inter-500">Seçilen pakette; ücretler ödenmediyse,(varsa) ek ücretler ödenmediyse</p>
                        </li>
                        <li>
                            <p className="inter-500">Sitenin kaynak koduna, Seku Software harici başka birisi müdahale ettiyse</p>
                        </li>
                        <li>
                            <p className="inter-500">Yazılımın & sitenin kullanım amacı değiştirilip farklı bir şekilde kullanıldıysa</p>
                        </li>
                        <li>
                            <p className="inter-500">Alan adı veya hosting süresi müşteri tarafından uzatılmadığı için site erişilemez hale geldiyse</p>
                        </li>
                        <li>
                            <p className="inter-500">Müşteri, hizmet sonrası taleplerinde daha önce anlaşılmamış ek özellikler talep ediyorsa</p>
                        </li>
                        <li>
                            <p className="inter-500">Sitenin yedekleri, müşteri tarafından yanlışlıkla silindiyse veya geri yükleme ihtiyacı doğduysa</p>
                        </li>
                        <li>
                            <p className="inter-500">Müşteri, haksız gerekçelerle sürekli revize talep ediyorsa</p>
                        </li>
                    </ul>
                    <p className="inter-500 mt-5">Bu tur işlemler yapılmadığı sürece Seku Software ürününüze teknik destek ve bakım verebilir.</p>
                    <p className="text-center mt-12 text-3xl">Müşteri hakları</p>
                    <p className="inter-500 mt-6">Müşteriler, aldığı üründe şu hakları olmaktadır:</p>
                    <ul className="mt-5 list-disc ms-12">
                        <li>
                            <p className="inter-500">Müşteri, yazılımsal sorunlarda teknik destek talep edebilir.</p>
                        </li>
                        <li>
                            <p className="inter-500">Müşterinin seçtiği paketteki revizyon hakkı kadar revizyon hakkı bulunmaktadır. Fazlasını satın alabilir.</p>
                        </li>
                        <li>
                            <p className="inter-500">Müşteri, dilerse bizimle çalışmayı sonlandırabilir sitenin kaynak kodunu talep edebilir.</p>
                        </li>
                        <li>
                            <p className="inter-500">x</p>
                        </li>
                        <li>
                            <p className="inter-500">Müşteri, hizmet sonrası taleplerinde daha önce anlaşılmamış ek özellikler talep ediyorsa</p>
                        </li>
                        <li>
                            <p className="inter-500">Sitenin yedekleri, müşteri tarafından yanlışlıkla silindiyse veya geri yükleme ihtiyacı doğduysa</p>
                        </li>
                        <li>
                            <p className="inter-500">Müşteri, haksız gerekçelerle sürekli revize talep ediyorsa</p>
                        </li>
                    </ul>
                </p>
            </div>
            <Footer />
        </>
    )
}

export default ShopTerms