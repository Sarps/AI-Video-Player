<template>
    <div class="left-side sticky-left-side">
        <!--logo and iconic logo start-->
        <div class="logo">
            <h1><a href="index.html"><span>AI</span> Player</a></h1>
        </div>
        <div class="logo-icon text-center">
            <a href="index.html">AI</a>
        </div>
        <!-- /w3l-agile -->
        <!--logo and iconic logo end-->
        <div class="left-side-inner">

            <!--sidebar nav start-->
            <ul class="nav nav-pills nav-stacked custom-nav">
                <li class="active"><a href="index.html"><i class="lnr lnr-home"></i><span>Home</span></a></li>
                <li><a href="radio.html"><i class="camera"></i> <span>Radio</span></a></li>
                <li><a href="#" data-toggle="modal" data-target="#myModal1"><i class="fa fa-th"></i><span>Apps</span></a></li>
                <li><a href="radio.html"><i class="lnr lnr-users"></i> <span>Artists</span></a></li>
                <li><a href="browse.html"><i class="lnr lnr-music-note"></i> <span>Albums</span></a></li>
                <li class="menu-list"><a href="browse.html"><i class="lnr lnr-indent-increase"></i> <span>Browser</span></a>
                    <ul class="sub-menu-list">
                        <li><a href="browse.html">Artists</a> </li>
                        <li><a href="404.html">Services</a> </li>
                    </ul>
                </li>
                <li><a href="blog.html"><i class="lnr lnr-book"></i><span>Blog</span></a></li>
                <li><a href="typography.html"><i class="lnr lnr-pencil"></i> <span>Typography</span></a></li>
                <li class="menu-list"><a href="#"><i class="lnr lnr-heart"></i> <span>My Favourities</span></a>
                    <ul class="sub-menu-list">
                        <li><a href="radio.html">All Songs</a></li>
                    </ul>
                </li>
                <li class="menu-list"><a href="contact.html"><i class="fa fa-thumb-tack"></i><span>Contact</span></a>
                    <ul class="sub-menu-list">
                        <li><a href="contact.html">Location</a> </li>
                    </ul>
                </li>
            </ul>
            <!--sidebar nav end-->
        </div>
    </div>
</template>

<script>
export default {
  props: ["value"],

  data() {
    return {
      navItems: [
        { icon: "home", title: "Home", to: "home" },
        { icon: "supervised_user_circle", title: "My Profile", to: "profile" },
        { icon: "notification_important", title: "My Alerts", to: "alerts" },
        { icon: "work_outline", title: "My Jobs", to: "alerts" },
        { icon: "school", title: "My Tests", to: "tests" },
        {},
        {
          icon: "contacts",
          title: "Contacts",
          subnav: [
            { icon: "contact_phone", title: "Branch Locator", to: "home" },
            { icon: "contact_support", title: "Branch NMS", to: "home" }
          ]
        },
        { icon: "help_outline", title: "F.A.Q's", to: "alerts" }
      ]
    };
  }
};
</script>

