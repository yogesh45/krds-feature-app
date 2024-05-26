import '../Styles/Features.scss'

export const Feature = ({data}) => {
    return(
        <div className="feature">
            <div className='feature-content'>
                <div className='feature-left'>
                    <div className='feature-header'>
                        <div className='feature-logo'>
                            {
                                <img src={data?.logo} alt={data.title} />
                            }
                        </div>
                            <div className='feature-title'>
                                {
                                    data.title
                                }
                            </div>
                            <div className='feature-description'>
                                {
                                    data.desc
                                }
                        </div>
                    </div>
                    
                    
                </div>
                <div className='feature-right'>
                    <div className='product-image'>
                        {
                            <img src={data?.image} alt={data.title} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}