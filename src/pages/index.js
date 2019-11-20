import React from "react"
import "../assets/main.scss"
import mainStyles from "../assets/app.module.scss"
import Header from "../components/layouts/header/Header"
import MainLayout from "../components/layouts/main/MainLayout"
import Article from "../components/common/article/Article"
import Pagination from "../components/common/pagination/Pagination"
import Post from "./Post"

const Index = props => {
	return (
		<div className={mainStyles.App}>
			<Post />
		</div>
	)
}

export default Index