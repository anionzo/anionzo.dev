import Route from "./Route";

const HeadMeta = (options: any, head : any) => {
    let { settings, navigation, footer } = options ?? {};
    
    let url = head?.url ?? Route.index(true);
    let siteName =  settings?.site_name ?? "Mi Miêu Blog"; 
    let siteDescription = head?.description ?? settings?.site_description ?? "Mi Miêu Blog là một blog về phát triển web, lập trình và công nghệ.";
    let siteTitle = head?.title ? `${head.title} | ${siteName}` : siteName;
    let ogImage = head?.image ?? Route.defaultCover(true);
    let author = head?.author ?? settings?.author ?? "Mi Miêu";
  
    return {
        url,
        siteName,
        siteDescription,
        siteTitle,
        ogImage,
        author,
    }
}

export default HeadMeta;