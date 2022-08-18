<template>
    <nav>
        <ul class="nav masthead-nav">
            <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                    Language
                    <span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                    <li><a href="?lang=en_US">English</a></li>
                    <li><a href="?lang=zh_TW">繁體中文 (臺灣/中華民國)</a></li>
                    <!--<li><a href="#">Help us for translation!</a></li>-->
                </ul>
            </li>
            <li><a href="#home">{{ ctx = "nav_home" }}</a></li>
            <li><a href="#features">{{ ctx = "nav_features" }}</a></li>
            <li><a href="#authors">{{ ctx = "nav_authors" }}</a></li>
            <li><a href="downloads">{{ ctx = "nav_downloads" }}</a></li>
            <li><a href="https://github.com/gkbm2013/tinker-IO" target="_blank">{{ ctx = "nav_github" }}</a></li>
        </ul>
    </nav>
</template>