import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography'
import Logo from './assets/logo.jpg'
import styles from './assets/styles.module.css';
import { getCharacters } from './api/getCharacters';
import {SWAPIResponse} from "./types/swapi";
import cx from 'classnames';
import MaleOutlinedIcon from '@mui/icons-material/MaleOutlined';
import FemaleOutlinedIcon from '@mui/icons-material/FemaleOutlined';

export const App = () => {
    const [data, setData] = useState<SWAPIResponse>({});
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        getCharacters(page).then(setData).finally(() => setLoading(false))
    }, [page])

    const totalPages = Math.ceil((data.count || 10)/10);

    const nextPage = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setPage((page) => page + 1);
    }

    const prevPage = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setPage((page) => page - 1)
    }

    return (<div>
        <Typography variant={"h1"} align={'center'} display={'flex'} alignItems={'centers'} justifyContent={'center'}>
            <img src={Logo} className={styles.logo}/>
            Star Wars Catalogue
        </Typography>
        <div className={styles['chars-table']}>
            {loading ?
                <Typography className={styles.loader}>loading</Typography> :
                data.results?.map(({name, gender, mass}) => <div key={name}>
                <div className={styles['char-line']}>
                    <Typography variant={'body1'}>{name} ({gender === 'male' ? <MaleOutlinedIcon/> : <FemaleOutlinedIcon/>})</Typography>
                    <Typography variant={'body1'}> {mass} kg</Typography>
                </div>
            </div>)}
        </div>
        <div className={styles.navigation}>
            <Typography variant={'body1'} className={styles['navigation-item']}>Страница: {page}/{totalPages}</Typography>
            <a href="#" className={cx(styles['navigation-item'], {
                [styles.disabled]: page === 1
            })} onClick={prevPage}>Назад</a>
            <a href="#" className={cx(styles['navigation-item'], {
                [styles.disabled]: page === totalPages
            })} onClick={nextPage}>Вперед</a>
        </div>
    </div>)
}
