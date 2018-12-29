<template>
    <div class="header-section">
        <!--toggle button start-->
        <a class="toggle-btn  menu-collapsed"><i class="fa fa-bars"></i></a>
        <!--toggle button end-->
        <!--notification menu start -->
        <div class="menu-right">
            <div class="profile_details">
                <div class="col-md-4 serch-part">
                    <div id="sb-search" class="sb-search">
                        <form action="#" method="post">

                            <input class="sb-search-input" placeholder="Search" type="search" name="search" id="search">
                            <input class="sb-search-submit" type="submit" value="">
                            <span class="sb-icon-search"> </span>
                        </form>
                    </div>
                </div>
                <!---->
                <div class="col-md-4 player">
                    <div class="audio-player">
                        <audio id="audio-player" controls="controls">
                            <source src="media/Blue%20Browne.ogg" type="audio/ogg">
                            </source>
                            <source src="media/Blue%20Browne.mp3" type="audio/mpeg">
                            </source>
                            <source src="media/Georgia.ogg" type="audio/ogg">
                            </source>
                            <source src="media/Georgia.mp3" type="audio/mpeg">
                            </source></audio>
                    </div>
                    <!---->
                    <!--audio-->
                    <link rel="stylesheet" type="text/css" media="all" href="css/audio.css">
                    <ul class="next-top">
                        <li><a class="ar" href="#"> <img src="images/arrow.png" alt="" /></a></li>
                        <li><a class="ar2" href="#"><img src="images/arrow2.png" alt="" /></i></a></li>
                    </ul>
                </div>
                <div class="clearfix"> </div>
            </div>
        </div>
        <div class="clearfix"></div>
    </div>
</template>

<script>

$(function () {
    $('#audio-player').mediaelementplayer({
        alwaysShowControls: true,
        features: ['playpause', 'progress', 'volume'],
        audioVolume: 'horizontal',
        iPadUseNativeControls: true,
        iPhoneUseNativeControls: true,
        AndroidUseNativeControls: true
    });
});


export default {
  filters: {
    iconify(value) {
      if (value.length) return value[0].toUpperCase();
      return "?";
    }
  }
};
</script>
