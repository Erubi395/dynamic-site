const careerData = {
    game: {
        title: "ゲームプログラマー",
        subtitle: "Game Developer / Unity Engineer",
        desc: "あなたの想像した世界をコードで現実にします。UnityやUnreal Engineを駆使して、キャラクターの動き、物理演算、ゲームのルールを作り上げます。",
        image: "https://images.unsplash.com/photo-1556438064-2d7646166914?q=80&w=2070&auto=format&fit=crop",
        skills: ["C# / C++", "Unity / Unreal Engine", "3D数学・物理", "チーム開発 (Git)"],
        salary: "平均年収: 450万円 〜 1000万円"
    },
    web: {
        title: "Webエンジニア",
        subtitle: "Full-Stack Web Developer",
        desc: "企業の顔となるWebサイトやWebアプリケーションを開発します。ユーザーが見る画面（フロントエンド）から、裏側のデータベース（バックエンド）まで構築します。",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop",
        skills: ["HTML / CSS / JavaScript", "React / Vue.js", "PHP / Node.js", "データベース設計"],
        salary: "平均年収: 400万円 〜 800万円"
    },
    sys: {
        title: "インフラ・ネットワークエンジニア",
        subtitle: "Network & Security Engineer",
        desc: "IT社会の基盤（インフラ）を支える仕事です。サーバーの構築、ネットワークの管理、そしてサイバー攻撃からシステムを守るセキュリティ対策を行います。",
        image: "https://www.bigdata-navi.com/aidrops/wp-content/uploads/2020/01/infrastructure-engineer.jpg",
        skills: ["Linux / Windows Server", "Cisco (CCNA)", "クラウド (AWS/Azure)", "セキュリティ基礎"],
        salary: "平均年収: 450万円 〜 900万円"
    },
    graphic: {
        title: "グラフィックデザイナー",
        subtitle: "Graphic Designer",
        desc: "ポスター、雑誌広告、パッケージデザイン、ロゴなど、印刷物を中心としたビジュアルデザインを行います。",
        image: "https://school.dhw.co.jp/images/New_folder/kannrenn/g1.png",
        skills: ["Adobe Illustrator", "Adobe Photoshop", "InDesign", "色彩感覚・タイポグラフィ"],
        salary: "平均年収: 350万円 〜 600万円"
    },
    uiux: {
        title: "UI/UXデザイナー",
        subtitle: "UI/UX Designer",
        desc: "Webサイトやアプリの「使いやすさ（UX）」と「見た目（UI）」を設計します。ユーザーが迷わずに操作でき、心地よい体験ができるデザインを作ります。",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop",
        skills: ["Figma / Adobe XD", "Webデザイン基礎", "ユーザーリサーチ", "プロトタイピング"],
        salary: "平均年収: 400万円 〜 750万円"
    },
    cg: {
        title: "3D・CGクリエイター",
        subtitle: "3D / CG Artist",
        desc: "映画、アニメ、CM、ゲームなどで使われる3Dキャラクターや背景を制作します。モデリングからアニメーションまでバーチャルな世界を創造します。",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop",
        skills: ["Blender / Maya", "ZBrush", "After Effects", "テクスチャ作成"],
        salary: "平均年収: 400万円 〜 850万円"
    }
};
function openModal(jobType) {
    const modal = document.getElementById("careerModal");
    const data = careerData[jobType];
    if (!data) return;

    document.getElementById("m-image").src = data.image;
    document.getElementById("m-title").innerText = data.title;
    document.getElementById("m-subtitle").innerText = data.subtitle;
    document.getElementById("m-desc").innerText = data.desc;
    document.getElementById("m-salary").innerText = data.salary;

    const skillsList = document.getElementById("m-skills");
    skillsList.innerHTML = "";
    data.skills.forEach(skill => {
        let li = document.createElement("li");
        li.innerText = skill;
        skillsList.appendChild(li);
    });

    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}
function closeModal() {
    document.getElementById("careerModal").style.display = "none";
    document.body.style.overflow = "auto";
}
window.onclick = function(event) {
    const modal = document.getElementById("careerModal");
    if (event.target == modal) {
        closeModal();
    }
}