import Props from "../componen/Props";

const IndukProps = () => {
    const meja = 1;
    const buku = "Gambar"
    const penghapus = " Standart"
    return ( 
        <>
            <Props 
                meja= {meja}
                buku= {buku}
                penghapus= {penghapus}
                siswa = {true}/>
            <hr />
            <Props 
                meja= "2"
                buku="Kotak-Kotak"
                penghapus="FaberCastel"
                siswa={false}/>
            <hr />
            <Props 
                meja= "3"
                buku="Bergaris"
                penghapus="Joyko"
                siswa={true}/>
            <hr />
        </>
     );
}
 
export default IndukProps;