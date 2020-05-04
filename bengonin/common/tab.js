
        var tabs = document.getElementById('tab_list').getElementsByTagName('a');

        var pages = document.getElementById('main').getElementsByTagName('section');

        function changeTab() {

            var targetid = this.href.substring(this.href.indexOf('#') + 1, this.href.length);

            for (var i = 0; i < pages.length; i++) {
                if (pages[i].id != targetid) {
                    pages[i].style.display = "none";
                } else {
                    pages[i].style.display = "block";
                }
            }

            return false;
        }

        for (var i = 0; i < tabs.length; i++) {
            tabs[i].onclick = changeTab;
        }


        tabs[0].onclick();
        //tabs[0]は初めの部なのでページが読み込まれたときにここを表示するように記載。
